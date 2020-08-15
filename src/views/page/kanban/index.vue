<template lang="pug">
  #wear
    header
      kanbanTitle
        circle-icon(:icon="kanban.icon" :color="kanban.fontColor" :background-color="kanban.color" :icon-size="20" :border-size="40")
        span {{ kanban.name }}
      kanban-tabs(:data="tabList" :fadeOut="true")

    div(v-if="haveArticle")
      article-item(:data="articleList")
    div(v-else)
      no-data-search
      
    
</template>

<script>
import { mapState, mapGetters } from "vuex";
import kanbanTabs from "@/components/kanban-tabs";
import kanbanTitle from "@/components/kanban-title";
import articleItem from "@/components/article-item";
import circleIcon from "@/components/circle-icon";
import noDataSearch from "@/components/no-data-search";

export default {
  name: "kanban",

  components: {
    kanbanTitle,
    kanbanTabs,
    articleItem,
    circleIcon,
    noDataSearch
  },

  data() {
    return {
      kanban: {},
      articleList: []
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
        this.kanban = this.kanbanObject(newVal.kanban);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
