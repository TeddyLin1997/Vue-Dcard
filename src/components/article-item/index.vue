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
        .mood
          awesome-icon.icon(:icon="['fas', 'heart']")
          span &nbsp {{ article.mood ? article.mood.length : 0  }}
        .react
          awesome-icon(:icon="['fas', 'comment']")
          span &nbsp {{ article.reaction ? article.reaction.length : 0 }}
        .collect
          awesome-icon(:icon="['fas', 'bookmark']")
          span &nbsp 收藏
    .picture
      img(:src="`https://picsum.photos/200/200?random=${article.id}`")

  //- 詳細內文
  dialog-page(:visible.sync="openDialog" min-width="720px" height="100vh")
    .detail(ref="detail" v-if="openDialog")
      .main
        .header 
          .name {{ articleData.name }} 
          .title {{ articleData.title }}
        .sub__title
          div {{ articleData.kanban }}
          div {{ articleData.time }}
        .content
          p {{ articleData.content }}
      .comments
        .comments__item(v-for="item, index of articleData.reaction" :key="index")
          .react__name {{ item.name }} :
          .react__reaction {{ item.reaction }}
      
    .bottom(ref="reaction")
      .close(v-show="openReaction" @click="closeReaction()")
        awesome-icon(:icon="['fas', 'times']")
      .reaction(v-loading="loading.reaction")
        awesome-icon.user(:icon="['fas', 'user']")
        span {{ userInfo.name }}
        .react(:style="{ 'visibility' : visibility }" @click="expandReaction()") 回應...
        awesome-icon.mood(ref="mood" :icon="['fas', 'heart']" @click="handkeClickMood(articleData)")
        awesome-icon.bookmark(ref="collect" :icon="['fas', 'bookmark']" @click="handkeClickCollect(articleData)")
      .textarea(v-show="openReaction")
        textarea(v-model="submitData.reaction" placeholder="回應..." @keyup.enter="handleEnterText")
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
      loading: {
        reaction: false
      },
      hasMood: false,
      hasCollect: false,
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
    },

    async articleData(value) {
      if (value === null) return;
      const kanbanName = this.formatter(value.kanban);
      this.hasMood = await this.$database.hasMood(
        kanbanName,
        value.id,
        this.userInfo.name
      );
      if (this.hasMood) this.$refs.mood.style.color = "#c84865";
      else this.$refs.mood.style.color = "";
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

    async handkeClickMood(data) {
      this.loading.reaction = true;

      const kanbanName = this.formatter(data.kanban);
      if (this.hasMood) {
        await this.$database.subMood(kanbanName, data.id, this.userInfo.name);
        this.articleData.mood.splice(
          this.articleData.mood.findIndex(
            item => item.name === this.userInfo.name
          ),
          1
        );
      } else {
        await this.$database.addMood(kanbanName, data.id, this.userInfo.name);
        const moodData = {
          id: this.articleData.mood ? this.articleData.mood.length : 0,
          name: this.userInfo.name
        };
        if (this.articleData.mood === undefined)
          this.articleData.mood = [moodData];
        else this.articleData.mood.push(moodData);
      }

      this.hasMood = await this.$database.hasMood(
        kanbanName,
        data.id,
        this.userInfo.name
      );
      this.$refs.mood.style.color = this.hasMood ? "#c84865" : "";

      this.loading.reaction = false;
    },

    handkeClickCollect(data, event) {
      let color = event.target.style.color;
      event.target.style.color = color ? "" : "#ee7832";
    },

    async handleEnterText(event) {
      if (event.shiftKey) return;

      await this.postReaction(this.articleData, this.submitData);
    },

    async postReaction(data, submitData) {
      this.closeReaction();

      const kanbanName = this.formatter(data.kanban);
      if (this.articleData.reaction === undefined)
        this.articleData.reaction = [submitData];
      else this.articleData.reaction.push(submitData);

      await this.$database.setReaction(kanbanName, data.id, submitData);
      this.rollInBottom();
      this.initSubmit();
    },

    closeReaction() {
      this.openReaction = false;
    },

    // 滾至底部
    rollInBottom() {
      const detail = this.$refs.detail;
      detail.scrollTo({ top: detail.scrollHeight, behavior: "smooth" });
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
