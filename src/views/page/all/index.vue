<template lang="pug">
  #all
    .section
      kanbanTitle(v-for="kanban of kanbanTitleList" :key="kanban.code")
        circle-icon(
          :icon="kanban.icon"
          :icon-size="20"
          :border-size="40"
          :color="kanban.fontColor"
          :background-color="kanban.color"
          )
        span {{ kanban.name }}
</template>

<script>
import circleIcon from "@/components/circle-icon";
import kanbanTitle from "@/components/kanban-title";
import { KANBAN_LIST } from "@/config/site";

export default {
  name: "all",

  components: {
    kanbanTitle,
    circleIcon
  },

  computed: {
    kanbanTitleList() {
      const result = [...KANBAN_LIST.featured.data];
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
