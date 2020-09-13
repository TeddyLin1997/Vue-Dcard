<template lang="pug">
  .user
    header
      span 我發表的文章

    body
      .no-collect(v-if="noHavePost")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的看板
      .section(v-else)
        article-item(:data="userPostList")

</template>

<script>
import { mapState } from "vuex";
import articleItem from "@/components/article-item";

export default {
  name: "user-follow",

  components: {
    articleItem
  },

  computed: {
    ...mapState(["userInfo", "kanbanList"]),

    userPostList() {
      return this.userInfo.post || [];
    },

    noHavePost() {
      return this.userPostList.length === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./user-style.scss";
</style>
