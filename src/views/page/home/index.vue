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
      tabList: [
        "全部",
        "追蹤",
        "熱門",
        "即時",
        "😍 愛心",
        "😡 森77",
        "😢 嗚嗚",
        "🤣 哈哈",
        "😲 驚訝",
        "🙇 跪"
      ],
      data: []
    };
  },

  async created() {
    this.data = await this.getFirebaseData("data");
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
