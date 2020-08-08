<template lang="pug">
  .new-post
    .wrapper
      h1 發表文章
      .kanban
        div
          button(v-model="postForm.kanban") {{ postForm.kanban }}
        div
          awesome-icon(:icon="['fas', 'info-circle']") 
          span &nbsp 發文規則
      .user
        button(v-model="postForm.nickName") 選擇發文身份
      .title
        input(v-model="postForm.title" placeholder="標題")
      .content
        textarea(v-model="postForm.content" type="textarea" placeholder="內文")
      .button
        button 取消
        button 下一步
    
    dialog-page(height="500px")
</template>

<script>
import dialogPage from "@/components/dialog-page";
import { KANBAN_LIST } from "@/config/site";

export default {
  name: "new-post",

  components: {
    dialogPage
  },

  data() {
    return {
      kanabanList: KANBAN_LIST,
      postForm: {
        kanban: "點此選擇發文看板",
        nickName: "",
        title: "",
        content: ""
      },
      test: null
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
