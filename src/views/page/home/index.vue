<template lang="pug">
  .home
    kanban-container
      template(#header)
        header.header
          kanban-title(:label="'首頁'" :icon="['fas', 'home']")
          kanban-tabs(:data="tabList")
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
    this.data = await this.getFirebaseData("data/home");
  },

  methods: {
    getFirebaseData(path) {
      return new Promise((resolve, reject) => {
        this.$firebase
          .ref(path)
          .once("value")
          .then(snapshot => resolve(snapshot.val()))
          .catch(err => reject(err));
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
