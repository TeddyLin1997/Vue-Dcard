<template lang="pug">
.kanban__header__title
  .kanban__name
    circle-icon(:icon="icon" :icon-size="iconSize" :border-size="40" border)
    span(ref="title") {{ label }}
  .kanban__follow
    button(type="button") 追蹤
</template>

<script>
import circleIcon from "@/components/circle-icon";

export default {
  name: "kanabn-title",

  props: {
    label: {
      type: String,
      required: true
    },

    icon: {
      type: Array,
      required: true
    },

    iconSize: {
      type: Number,
      default: 24
    },

    fontSize: {
      type: Number,
      default: 16
    }
  },

  components: {
    circleIcon
  },

  mounted() {
    this.$refs.title.style.fontSize = this.fontSize + "px";
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
