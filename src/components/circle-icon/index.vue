<template lang="pug">
.circle-icon(ref="circle" :class="{ 'border__line' : border }")
  awesome-icon.icon(ref="icon" :icon="icon")
</template>

<script>
export default {
  name: "circle-icon",

  props: {
    icon: {
      type: Array,
      require: true
    },

    iconSize: {
      type: Number,
      default: 16
    },

    border: {
      type: Boolean,
      default: false
    },

    borderSize: {
      type: Number,
      default: 30
    },

    color: {
      type: String,
      default: "#000"
    },

    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },

  mounted() {
    this.$refs.circle.style.width = this.borderSize + "px";
    this.$refs.circle.style.height = this.borderSize + "px";
    this.$refs.circle.style.lineHeight = this.borderSize + "px";
    this.$refs.circle.style.backgroundColor = this.backgroundColor;

    this.$refs.icon.style.fontSize = this.iconSize + "px";
    this.$refs.icon.style.color = this.color;
  }
};
</script>

<style lang="scss" scoped>
.circle-icon {
  @include flex();
  border-radius: 100%;
  background-color: #fff;
  color: black;
  text-align: center;
  vertical-align: middle;
}

.border__line {
  border: 2px solid black;
}
</style>
