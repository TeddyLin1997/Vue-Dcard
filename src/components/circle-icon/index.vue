<template lang="pug">
.circle-icon(ref="circle" :class="{ 'border__line' : border }")
    awesome-icon.icon(:icon="icon")
</template>

<script>
export default {
  name: "circle-icon",

  props: {
    icon: {
      type: Array,
      require: true
    },

    border: {
      type: Boolean,
      default: false
    },

    size: {
      type: Number,
      default: 30
    }
  },

  mounted() {
    this.$refs.circle.style.width = this.size + "px";
    this.$refs.circle.style.height = this.size + "px";
    this.$refs.circle.style.lineHeight = this.size + "px";
  }
};
</script>

<style lang="scss" scoped>
.circle-icon {
  display: inline-block;
  border-radius: 100%;
  background-color: white;
  color: black;
  text-align: center;
}

.border__line {
  border: 2px solid black;
}
</style>
