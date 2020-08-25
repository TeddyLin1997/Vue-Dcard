<template lang="pug">
  #user-follow-kanban
    header
      span 追蹤的看板

    body
      .no-collect(v-if="haveCollect")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的看板
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
#user-collect,
.no-collect,
body {
  @include flex(column);
}

header {
  padding: 0.4rem 0;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #00000044;
  span {
    font-size: 1.6rem;
  }
}

body {
  width: 100%;
  min-height: 600px;
}

.no-collect {
  img {
    margin: 1rem;
    width: 280px;
    height: auto;
  }
}
</style>
