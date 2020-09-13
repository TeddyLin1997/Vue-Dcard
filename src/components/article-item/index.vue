<template lang="pug">
section(v-loading="loading.page")
  //- 文章列表
  article(v-for="article of articleList" :key="`${article.kanban}-${article.id}`" @click="getArticle(article)")
    .wrapper
      span {{ article.name }} 、 {{ article.time }}
      h3 {{ article.title }}
      p {{ article.content }}
      footer
        .mood(@click.stop="handkeClickMood(article)")
          awesome-icon(:icon="['fas', 'heart']")
          span &nbsp {{ article.mood ? article.mood.length : 0  }}
        .react
          awesome-icon(:icon="['fas', 'comment']")
          span &nbsp {{ article.reaction ? article.reaction.length : 0 }}
        .collect(:class="{'opacity': userIsCollect(article) }" @click.stop="handkeClickCollect(article)")
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
import { mapState, mapActions } from "vuex";
import { KANBAN_LIST } from "@/config/site.js";
import { deepCopy } from "@/helper";
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
      loading: {
        page: false,
        reaction: false
      },
      debounce: false,
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
    },

    articleList() {
      return this.data.filter(Boolean);
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

      this.hasCollect = await this.$database.hasCollect(
        value.kanban,
        value.id,
        this.userInfo.uid
      );
    }
  },

  created() {
    this.initSubmit();
  },

  methods: {
    ...mapActions(["setUserInfo"]),

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
      this.loading.page = true;
      this.loading.reaction = true;

      const kanbanName = this.formatter(data.kanban);

      this.hasMood = await this.$database.hasMood(
        kanbanName,
        data.id,
        this.userInfo.name
      );

      if (this.hasMood) {
        // 更新firebase
        await this.$database.subMood(kanbanName, data.id, this.userInfo.name);

        // 更新本地
        const index = data.mood.findIndex(item => {
          if (item) return item.name === this.userInfo.name;
        });
        data.mood.splice(index, 1);
      } else {
        // 更新firebase
        await this.$database.addMood(kanbanName, data.id, this.userInfo.name);

        // 更新本地
        const moodData = {
          id: data.mood ? data.mood.length : 0,
          name: this.userInfo.name
        };
        if (data.mood === undefined) data.mood = [moodData];
        else data.mood.push(moodData);
      }

      this.hasMood = await this.$database.hasMood(
        kanbanName,
        data.id,
        this.userInfo.name
      );

      this.loading.reaction = false;
      this.loading.page = false;
    },

    // 點擊收藏
    async handkeClickCollect(data) {
      this.loading.page = true;
      this.loading.reaction = true;

      this.hasCollect = await this.$database.hasCollect(
        data.kanban,
        data.id,
        this.userInfo.uid
      );

      const submitData = deepCopy(this.userInfo);

      if (this.hasCollect) {
        // 更新firebase
        await this.$database.subCollect(this.userInfo.uid, data);

        // 更新本地
        const index = submitData.collect.findIndex(item => {
          if (item) return item.id === data.id && item.kanban === data.kanban;
        });
        submitData.collect.splice(index, 1);
        this.setUserInfo(submitData);
      } else {
        // 更新firebase
        await this.$database.addCollect(this.userInfo.uid, data);

        // 更新本地
        if (submitData.collect === undefined) submitData.collect = [];
        submitData.collect.push(data);
        this.setUserInfo(submitData);
      }

      this.hasCollect = await this.$database.hasCollect(
        data.kanban,
        data.id,
        this.userInfo.uid
      );
      this.loading.reaction = false;
      this.loading.page = false;
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
      if (event.shiftKey || this.debounce) return;
      this.debounce = true;

      const kanbanName = this.formatter(data.kanban);
      if (data.reaction === undefined) data.reaction = [submitData];
      else data.reaction.push(submitData);

      await this.$database.setReaction(kanbanName, data.id, submitData);
      this.rollInBottom();
      this.closeReaction();
      this.initSubmit();

      this.debounce = false;
    },

    userIsCollect(data) {
      if (this.userInfo.collect === undefined) return;
      return this.userInfo.collect.find(item => {
        if (item) return item.id === data.id && item.kanban === data.kanban;
      });
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
