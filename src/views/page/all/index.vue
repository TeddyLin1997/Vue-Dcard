<template lang="pug">
  #all
    .section
      kanban-title(v-for="kanban of kanbanList" :key="kanban.code" :kanban="kanban" border)
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
