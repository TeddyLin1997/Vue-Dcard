<template lang="pug">
  #home(v-loading="loading")
    header
      kanban-tabs(:data="tabList" :fadeOut="true")
    body
      article-item(v-if="haveArticle" :data="articleList")
      no-data-search(v-else)
</template>

<script>
import { mapState } from "vuex";
import kanbanTitle from "@/components/kanban-title";
import kanbanTabs from "@/components/kanban-tabs";
import articleItem from "@/components/article-item";
import noDataSearch from "@/components/no-data-search";

export default {
  name: "home",

  components: {
    kanbanTabs,
    kanbanTitle,
    articleItem,
    noDataSearch
  },

  data() {
    return {
      loading: false,
      articleList: []
    };
  },

  computed: {
    ...mapState(["tabList"]),

    haveArticle() {
      return this.articleList.length !== 0;
    }
  },

  async created() {
    this.loading = true;
    this.articleList = await this.$database.getArticle("data/home");
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
