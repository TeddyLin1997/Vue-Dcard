<template lang="pug">
  #wear
    header
      kanbanTitle
        circle-icon(:icon="kanban.icon" :color="kanban.fontColor" :background-color="kanban.color" :icon-size="20" :border-size="40")
        span {{ kanban.name }}
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
        const path = `data/${newVal.kanban}`;
        this.kanban = this.kanbanObject(newVal.kanban);
        this.getArticleList(path);
      }
    }
  },

  methods: {
    async getArticleList(path) {
      this.articleList = await this.$database.getArticle(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
