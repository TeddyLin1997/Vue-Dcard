<template lang="pug">
  #search(v-loading="loading")
    div {{ keyword }}
    articleItem(v-if="haveData" :data="searchResult")
    no-data-search(v-else)
    
    
</template>

<script>
import articleItem from "@/components/article-item";
import noDataSearch from "@/components/no-data-search";
import { sleep } from "@/helper";

export default {
  name: "search",

  components: {
    articleItem,
    noDataSearch
  },

  data() {
    return {
      loading: false,
      keyword: "",
      allDataList: [],
      searchResult: []
    };
  },

  computed: {
    haveData() {
      return this.searchResult.length !== 0;
    }
  },

  created() {
    this.init(this.keyword);
  },

  watch: {
    "$route.query": {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (newVal !== undefined) this.keyword = newVal.search;
      }
    },

    keyword(newVal) {
      this.initList();
      this.init(newVal);
    }
  },

  methods: {
    async init(keyword) {
      this.loading = true;
      await this.getAllData();
      await this.searchArticle(keyword);
      this.loading = false;
    },

    initList() {
      this.searchResult = [];
      this.allDataList = [];
    },

    async getAllData() {
      let allData = await this.$database.get("data");
      delete allData.home;
      Object.keys(allData).forEach(key => {
        this.allDataList.push(...allData[key]);
      });
    },

    async searchArticle(keyword) {
      await sleep(3000);
      const match = new RegExp(keyword, "i");
      this.searchResult = this.allDataList.filter(item => {
        return item.title.match(match) || item.content.match(match);
      });
    }
  }
};
</script>

<style></style>
