<template lang="pug">
  .home
    kanban-container
      template(#header)
        header.header
          kanban-tabs(:data="tabList")
      template(#article)
        article.article article是我12312312
      template(#footer)
        footer.footer 腳在這逼辣
</template>

<script>
import kanbanContainer from "@/components/kanban-container";
import kanbanTabs from "@/components/kanban-tabs";

export default {
  name: "home",

  components: {
    kanbanContainer,
    kanbanTabs
  },

  data() {
    return {
      tabList: [
        "全部",
        "追蹤",
        "熱門",
        "即時",
        "😍最多",
        "😡排行",
        "😢排行",
        "🤣排行",
        "😲排行",
        "🙇排行"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.header {
  margin-top: 40px;
}
.article {
  margin: 20px 40px;
  background-color: lightseagreen;
}

.footer {
  background-color: olive;
}
</style>
