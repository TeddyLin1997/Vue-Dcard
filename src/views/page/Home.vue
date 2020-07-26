<template lang="pug">
  .home
    kanban-container
      template(#header)
        header.header
          .kanban__title
            .kanban__name
              circle-icon(:icon="['fas', 'list']" :size="40" border)
              span 首頁
            .follow
              button(type="button") 追蹤
          kanban-tabs(:data="tabList")
      template(#article)
        article.article article是我12312312
      template(#footer)
        footer.footer 腳在這逼辣
</template>

<script>
import kanbanContainer from "@/components/kanban-container";
import kanbanTabs from "@/components/kanban-tabs";
import circleIcon from "@/components/circle-icon";

export default {
  name: "home",

  components: {
    kanbanContainer,
    kanbanTabs,
    circleIcon
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

.kanban__title {
  @include flex();
}

.follow {
  width: 100px;
  height: 50px;
}
</style>
