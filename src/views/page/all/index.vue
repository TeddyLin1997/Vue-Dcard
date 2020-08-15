<template lang="pug">
  #all
    .section
      kanbanTitle.kanban__title(v-for="kanban of kanbanList" :key="kanban.code")
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
import { mapState } from "vuex";

export default {
  name: "all",

  components: {
    kanbanTitle,
    circleIcon
  },

  computed: {
    ...mapState(["kanbanList"])
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
