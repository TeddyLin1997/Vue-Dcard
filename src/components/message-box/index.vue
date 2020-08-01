<template lang="pug">
  .message-box
    transition(name="message")
      .message(v-show="isDisplay")
        span {{ content }}
</template>

<script>
export default {
  name: "message-box",

  data() {
    return {
      isDisplay: false,
      content: ""
    };
  },

  watch: {
    isDisplay(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.isDisplay = false;
        }, 1500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
