<template lang="pug">
  .aside-menu
    .kanban__group(v-for="kanban of kanbanList" :key="kanban.title")
      .kanban__title {{ kanban.title }}
      router-link.kanban__item(v-for="item of kanban.data" :key="item.code" :to="item.code")
        circle-icon(:icon="item.icon" :icon-size="18" :color="item.fontColor" :background-color="item.color")
        span.content {{ item.name }}
</template>

<script>
import circleIcon from "@/components/circle-icon";
import { KANBAN_LIST } from "@/config/site";

export default {
  name: "aside-menu",

  components: {
    circleIcon
  },

  data() {
    return {
      // 預設看板
      kanbanList: KANBAN_LIST
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
