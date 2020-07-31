<template lang="pug">
section
  .article-item(v-for="article of data" :key="article.id")
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
