<template lang="pug">
  .message-box
    transition(name="message")
      .message(v-show="isDisplay")
        awesome-icon(:icon="['fas', 'exclamation-circle']")
        span &nbsp {{ content }}
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
          this.destroyMessage();
        }, 1500);
      }
    }
  },

  methods: {
    destroyMessage() {
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
