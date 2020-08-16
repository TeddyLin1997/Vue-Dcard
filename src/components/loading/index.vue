<template lang="pug">
  transition(name="loading")
    #loading(v-show="isLoading")
      .text
        span {{ text }} {{ dots }}
      .shadow
        .bounce
</template>

<script>
export default {
  name: "loading",

  data() {
    return {
      isLoading: false,
      text: "載入中",
      dots: "...",
      timer: null
    };
  },

  created() {
    this.setTimer();
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    setTimer() {
      this.timer = setInterval(() => {
        if (this.dots.length === 5) this.dots = "";
        else this.dots += ".";
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
