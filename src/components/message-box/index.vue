<template lang="pug">
  .message-box
    transition(name="message")
      .message(:class="type" v-show="isDisplay")
        awesome-icon(:icon="['fas', 'exclamation-circle']")
        span &nbsp {{ content }}
</template>

<script>
export default {
  name: "message-box",

  data() {
    return {
      isDisplay: false,
      content: "",
      type: "success"
    };
  },

  watch: {
    isDisplay(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.isDisplay = false;
          this.destroyMessage();
        }, 2000);
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
