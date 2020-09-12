<template lang="pug">
  .user
    header
      span 我的收藏

    body
      .no-collect(v-if="haveCollect")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的文章
      .section(v-else)
</template>

<script>
export default {
  name: "user-collect",

  data() {
    return {
      data: []
    };
  },

  computed: {
    haveCollect() {
      return this.data.length === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./user-style.scss";
</style>
