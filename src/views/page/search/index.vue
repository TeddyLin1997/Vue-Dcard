<template lang="pug">
  #search(v-loading="loading")
    .title 搜尋： {{ keyword }}
    articleItem(v-if="haveData" :data="searchResult")
    no-data-search(v-else)
    
    
</template>

<script>
import articleItem from "@/components/article-item";
import noDataSearch from "@/components/no-data-search";

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
    this.getResult(this.keyword);
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
      this.getResult(newVal);
    }
  },

  methods: {
    initList() {
      this.searchResult = [];
      this.allDataList = [];
    },

    async getResult(keyword) {
      this.loading = true;
      await this.getAllData();
      await this.searchAllData(keyword);
      this.loading = false;
    },

    async getAllData() {
      let allData = await this.$database.get("data");
      delete allData.home;
      Object.keys(allData).forEach(key => {
        this.allDataList.push(...allData[key]);
      });
    },

    async searchAllData(keyword) {
      if (keyword === "") return;
      const match = new RegExp(keyword, "i");
      this.searchResult = this.allDataList.filter(item => {
        return item.title.match(match) || item.content.match(match);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding: 1rem 1.8rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: left;
}
</style>
