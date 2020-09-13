<template lang="pug">
  .user
    header
      span 我的收藏

    body
      .no-collect(v-if="haveCollect")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的文章
      .section(v-else)
        articleItem(:data="userCollectList")
        
</template>

<script>
import { mapState } from "vuex";
import articleItem from "@/components/article-item";

export default {
  name: "user-collect",

  components: {
    articleItem
  },

  computed: {
    ...mapState(["userInfo"]),

    userCollectList() {
      return this.userInfo.collect || [];
    },

    haveCollect() {
      return this.userCollectList.length === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./user-style.scss";
</style>
