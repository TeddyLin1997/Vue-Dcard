<template lang="pug">
  #all
    .section
      kanbanTitle(v-for="kanban of kanbanTitleList" :key="kanban.code" :label="kanban.name" :icon="kanban.icon" :icon-size="16")
</template>

<script>
import kanbanTitle from "@/components/kanban-title";
import { KANBAN_LIST } from "@/config/site";

export default {
  name: "all",

  components: {
    kanbanTitle
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
