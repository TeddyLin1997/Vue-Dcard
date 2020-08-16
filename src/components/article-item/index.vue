<template lang="pug">
section
  //- 文章列表
  .article-item(v-for="article of data" :key="article.id" @click="getArticle(article)")
    .wrapper
      header
        span {{ article.name }} 、
        span {{ article.time }}
      article
        h3 {{ article.title }}
        p {{ article.content }}
      footer
        .mood 心情: &nbsp {{ article.mood }}
        .react 回應: &nbsp {{ article.react }}
        .collect
          awesome-icon(:icon="['fas', 'bookmark']")
          span &nbsp 收藏
    .picture
      img(:src="`https://picsum.photos/200/200?random=${article.id}`")

  //- 詳細內文
  dialogPage(:visible.sync="openDialog" width="720px" height="100vh")
    .detail(v-if="openDialog")
      .header 
        .name {{ articleData.name }} 
        .title {{ articleData.title }}
      .sub__title
        div {{ articleData.kanban }}
        div {{ articleData.time }}
      .content
        p {{ articleData.content }}
    
</template>

<script>
import dialogPage from "@/components/dialog-page";

export default {
  name: "article-item",

  components: {
    dialogPage
  },

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      articleData: null,
      openDialog: false
    };
  },

  watch: {
    openDialog(value) {
      if (value === false) this.articleData = null;
    }
  },

  methods: {
    getArticle(article) {
      this.openDialog = true;
      this.articleData = article;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
