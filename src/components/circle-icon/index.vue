<template lang="pug">
.circle-icon(:class="{ 'border__line' : border }")
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
    }
  }
};
</script>

<style lang="scss" scoped>
.circle-icon {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 100%;
  background-color: white;
  color: black;
}

.border__line {
  border: 2px solid black;
  line-height: 28px !important;
}
</style>
