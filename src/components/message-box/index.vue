<template lang="pug">
  .message-box
    transition(name="message")
      .message(v-show="isDisplay")
        span {{ content }}
</template>

<script>
export default {
  name: "message-box",

  props: {
    content: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isDisplay: true
    };
  },

  methods: {
    display() {
      this.isDisplay = true;
      setTimeout(() => {
        this.isDisplay = false;
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
