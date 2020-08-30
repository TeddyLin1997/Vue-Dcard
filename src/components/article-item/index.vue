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
  dialog-page(:visible.sync="openDialog" min-width="720px" height="100vh")
    .detail(v-if="openDialog")
      .header 
        .name {{ articleData.name }} 
        .title {{ articleData.title }}
      .sub__title
        div {{ articleData.kanban }}
        div {{ articleData.time }}
      .content
        p {{ articleData.content }}
      .comments
      
    .bottom(ref="reaction")
      .close(v-show="openReaction")
        awesome-icon(:icon="['fas', 'times']" @click="close()")
      .reaction
        awesome-icon.user(:icon="['fas', 'user']")
        .react(:style="{ 'visibility' : visibility }" @click="expandReaction()") 回應...
        awesome-icon.heart(:icon="['fas', 'heart']" @click="handleClickIcon('heart', $event)")
        awesome-icon.bookmark(:icon="['fas', 'bookmark']" @click="handleClickIcon('bookmark', $event)")
      .textarea(v-show="openReaction")
        textarea(placeholder="回應...")
        .submit
          button 送出
        
    
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
      openDialog: false,
      openReaction: false
    };
  },

  computed: {
    visibility() {
      return this.openReaction ? "hidden" : "visible";
    }
  },

  watch: {
    openDialog(value) {
      if (value === false) this.articleData = null;
      if (value === false) this.openReaction = false;
    }
  },

  methods: {
    getArticle(article) {
      this.openDialog = true;
      this.articleData = article;
    },

    expandReaction() {
      this.openReaction = true;
    },

    handleClickIcon(icon, event) {
      let rowColor = event.target.style.color;
      let color;
      if (icon === "heart") color = "#c84865";
      else color = "#ee7832";
      event.target.style.color = rowColor === "" ? color : "";
    },

    close() {
      this.openReaction = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
