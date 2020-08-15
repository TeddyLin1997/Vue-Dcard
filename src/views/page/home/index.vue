<template lang="pug">
  #home
    header
      kanban-tabs(:data="tabList" :fadeOut="true")
    body
      article-item(:data="articleList")
</template>

<script>
import { mapState } from "vuex";
import kanbanTitle from "@/components/kanban-title";
import kanbanTabs from "@/components/kanban-tabs";
import articleItem from "@/components/article-item";

export default {
  name: "home",

  components: {
    kanbanTabs,
    kanbanTitle,
    articleItem
  },

  data() {
    return {
      articleList: []
    };
  },

  computed: {
    ...mapState(["tabList"])
  },

  async created() {
    this.articleList = await this.$database.getArticle("data/home");
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
