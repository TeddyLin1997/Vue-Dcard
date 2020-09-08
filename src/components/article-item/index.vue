<template lang="pug">
section
  //- 文章列表
  article(v-for="article of data" :key="`${article.kanban}-${article.id}`" @click="getArticle(article)")
    .wrapper
      span {{ article.name }} 、 {{ article.time }}
      h3 {{ article.title }}
      p {{ article.content }}
      footer
        .mood
          awesome-icon(:icon="['fas', 'heart']")
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
        h1.username {{ articleData.name }} 
        h1.title {{ articleData.title }}
        .subtitle
          span {{ articleData.kanban }}
          span {{ articleData.time }}
        p {{ articleData.content }}

      .comments__item(v-for="item, index of articleData.reaction" :key="index")
        span {{ item.name }} :
        span {{ item.reaction }}
      
    .bottom
      awesome-icon.close(v-show="openReaction" :icon="['fas', 'times']" @click="closeReaction()")
      .reaction(v-loading="loading.reaction")
        awesome-icon.user(:icon="['fas', 'user']")
        span {{ userInfo.name }}
        .react(:style="{ 'visibility' : visibility }" @click="expandReaction()") 回應...
        awesome-icon.icon(ref="mood" :icon="['fas', 'heart']" @click="handkeClickMood(articleData)")
        awesome-icon.icon(ref="collect" :icon="['fas', 'bookmark']" @click="handkeClickCollect(articleData)")
      template(v-if="openReaction")
        textarea(ref="textarea" v-model="submitData.reaction" placeholder="回應..." @keyup.enter="postReaction(articleData, submitData, $event)")
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
      if (value) return;
      this.articleData = null;
      this.openReaction = false;
      this.submitData.reaction = "";
    },

    async articleData(value) {
      if (value === null) return;
      const kanbanName = this.formatter(value.kanban);
      this.hasMood = await this.$database.hasMood(
        kanbanName,
        value.id,
        this.userInfo.name
      );

      this.$refs.mood.style.color = this.hasMood ? "#c84865" : "";
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

    // 取得單筆文章內容
    getArticle(article) {
      this.openDialog = true;
      this.articleData = article;
    },

    // 點擊心情
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

    // 點擊收藏
    handkeClickCollect(data, event) {
      let color = event.target.style.color;
      event.target.style.color = color ? "" : "#ee7832";
    },

    // 開啟留言框
    async expandReaction() {
      this.openReaction = true;

      await this.$nextTick();
      this.$refs.textarea.focus();
    },

    // 關閉留言框
    closeReaction() {
      this.openReaction = false;
    },

    // 送出留言
    async postReaction(data, submitData, event) {
      if (event.shiftKey) return;

      const kanbanName = this.formatter(data.kanban);
      if (data.reaction === undefined) data.reaction = [submitData];
      else data.reaction.push(submitData);

      await this.$database.setReaction(kanbanName, data.id, submitData);
      this.rollInBottom();
      this.closeReaction();
      this.initSubmit();
    },

    // 滾至底部
    rollInBottom() {
      const detail = this.$refs.detail;
      detail.scrollTo({ top: detail.scrollHeight, behavior: "smooth" });
    },

    // other
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
