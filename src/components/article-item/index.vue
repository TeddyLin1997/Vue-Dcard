<template lang="pug">
section
  .article-item(v-for="article of data" :key="article.id")
    .wrapper
      header
        span {{ article.user }} 、
        span {{ article.postTime }}
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
      img(src="./logo.png")
</template>

<script>
export default {
  name: "article-item",

  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
