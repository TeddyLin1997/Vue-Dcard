<template lang="pug">
section
  //- 文章列表
  .article-item(v-for="article of data" :key="`${article.kanban}-${article.id}`" @click="getArticle(article)")
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
  dialog-page(:visible.sync="openDialog" min-width="720px" height="100vh" )
    .detail(v-if="openDialog")
      .main
        .header 
          .name {{ articleData.name }} 
          .title {{ articleData.title }}
        .sub__title
          div {{ articleData.kanban }}
          div {{ articleData.time }}
        .content
          p {{ articleData.content }}
      .comments(v-loading="loading")
        .comments__item(v-for="item, index of articleData.reaction" :key="index")
          .react__name {{ item.name }} :
          .react__reaction {{ item.reaction }}
      
    .bottom(ref="reaction")
      .close(v-show="openReaction")
        awesome-icon(:icon="['fas', 'times']" @click="close()")
      .reaction
        awesome-icon.user(:icon="['fas', 'user']")
        span(v-show="openReaction") {{ userInfo.name }}
        .react(:style="{ 'visibility' : visibility }" @click="expandReaction()") 回應...
        awesome-icon.heart(:icon="['fas', 'heart']" @click="handleClickIcon('heart', $event)")
        awesome-icon.bookmark(:icon="['fas', 'bookmark']" @click="handleClickIcon('bookmark', $event)")
      .textarea(v-show="openReaction")
        textarea(v-model="submitData.reaction" placeholder="回應...")
        .submit
          button(@click="postReaction(articleData, submitData)") 送出
        
    
</template>

<script>
import { mapState } from "vuex";
import dialogPage from "@/components/dialog-page";
import { KANBAN_LIST } from "@/config/site.js";

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
      loading: false,
      openDialog: false,
      openReaction: false,
      articleData: null,
      submitData: {},
      KANBAN_LIST
    };
  },

  computed: {
    ...mapState(["userInfo"]),

    visibility() {
      return this.openReaction ? "hidden" : "visible";
    }
  },

  watch: {
    openDialog(value) {
      if (value === false) {
        this.articleData = null;
        this.openReaction = false;
        this.submitData.reaction = "";
      }
    }
  },

  created() {
    this.initSubmit();
  },

  methods: {
    initSubmit() {
      this.submitData = {
        name: this.userInfo.name,
        reaction: ""
      };
    },

    getArticle(article) {
      this.openDialog = true;
      this.articleData = article;
    },

    expandReaction() {
      this.openReaction = true;
    },

    handleClickIcon(icon, event) {
      let rowColor = event.target.style.color;
      let color = null;
      if (icon === "heart") color = "#c84865";
      if (icon === "bookmark") color = "#ee7832";
      event.target.style.color = rowColor === "" ? color : "";
    },

    close() {
      this.openReaction = false;
    },

    async postReaction(data, submitData) {
      const path = `data/${this.formatter(data.kanban)}/${data.id}/reaction`;
      if (this.articleData.reaction === undefined)
        this.articleData.reaction = [submitData];
      else this.articleData.reaction.push(submitData);

      await this.$database.setArticle(path, submitData);
      this.initSubmit();
    },

    formatter(value) {
      let result = "home";
      let target = KANBAN_LIST.data.find(item => item.name === value);
      if (target !== undefined) result = target.code;
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
