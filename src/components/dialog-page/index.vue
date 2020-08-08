<template lang="pug">
  .mask
    .dialog(ref="dialog")
      h1 dialog
      slot
</template>

<script>
export default {
  name: "dialog-page",

  props: {
    width: {
      type: String,
      default: "500px"
    },

    minWidth: {
      type: String,
      default: ""
    },

    maxWidth: {
      type: String,
      default: ""
    },

    height: {
      type: String,
      default: ""
    }
  },

  mounted() {
    this.initAttr();
  },

  methods: {
    initAttr() {
      const customStyle = {
        width: this.width,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
        height: this.height
      };

      Object.keys(customStyle).forEach(key => {
        this.$refs.dialog.style[key] = customStyle[key];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
