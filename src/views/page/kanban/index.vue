<template lang="pug">
  #kanban(v-loading="isLoading")
    header
      kanbanTitle(:kanban="kanban")
      kanban-tabs(:data="tabList" :fadeOut="true")
    body
      article-item(v-if="haveArticle" :data="articleList")
      no-data-search(v-else)
      
    
</template>

<script>
import { mapState, mapGetters } from "vuex";
import kanbanTabs from "@/components/kanban-tabs";
import kanbanTitle from "@/components/kanban-title";
import articleItem from "@/components/article-item";
import noDataSearch from "@/components/no-data-search";

export default {
  name: "kanban",

  components: {
    kanbanTitle,
    kanbanTabs,
    articleItem,
    noDataSearch
  },

  data() {
    return {
      isLoading: false,
      kanban: {},
      articleList: [],
      currKanban: "home"
    };
  },

  computed: {
    ...mapState(["tabList"]),

    ...mapGetters(["kanbanObject"]),

    haveArticle() {
      return this.articleList.length !== 0;
    }
  },

  watch: {
    "$route.params": {
      immediate: true,
      handler(newVal) {
        this.currKanban = newVal.kanban;
        this.kanban = this.kanbanObject(this.currKanban);
        this.getArticle(this.currKanban);
      }
    }
  },

  methods: {
    async getArticle(kanban) {
      this.isLoading = true;
      this.articleList = await this.$database.getArticle(kanban);
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
