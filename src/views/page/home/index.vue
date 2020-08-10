<template lang="pug">
  #home
    kanban-container
      template(#header)
        header.header
          kanban-title(:label="'首頁'" :icon="['fas', 'home']" :font-size="26")
          kanban-tabs(:data="tabList" :fadeOut="true")
      template(#article)
        article
          article-item(:data="data")
      template(#footer)
        footer
</template>

<script>
import kanbanContainer from "@/components/kanban-container";
import kanbanTitle from "@/components/kanban-title";
import kanbanTabs from "@/components/kanban-tabs";
import articleItem from "@/components/article-item";
import { TAB_LIST } from "@/config/site";

export default {
  name: "home",

  components: {
    kanbanContainer,
    kanbanTabs,
    kanbanTitle,
    articleItem
  },

  data() {
    return {
      tabList: TAB_LIST,
      data: []
    };
  },

  async created() {
    this.data = await this.$database.get("data/home");
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
