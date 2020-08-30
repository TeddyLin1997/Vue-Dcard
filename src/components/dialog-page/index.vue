<template lang="pug">
  .mask(v-show="visible" @click="changeVisible()")
    .dialog(ref="dialog" @click.stop)
      .close
        awesome-icon.icon(:icon="['fas', 'times']" @click="changeVisible()")
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
    },

    visible: {
      type: Boolean,
      default: false
    },

    radius: Boolean
  },

  watch: {
    visible(value) {
      if (value) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    }
  },

  mounted() {
    this.initAttr();
  },

  methods: {
    // 初始化設置屬性
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

      if (this.radius) this.$refs.dialog.style["borderRadius"] = "1rem";
    },

    // 與外部控制開關參數同步
    changeVisible() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
