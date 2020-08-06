<template lang="pug">
  .aside-menu
    kanban(:kanbanData="kanban.defalut")
    kanban(:kanbanData="kanban.follows")
    kanban(:kanbanData="kanban.featured")
</template>

<script>
import kanban from "@/components/kanban";
import { KANBAN_LIST } from "@/config/site";

export default {
  name: "aside-menu",

  components: {
    kanban
  },

  data() {
    return {
      // 預設看板
      kanban: KANBAN_LIST
    };
  }
};
</script>

<style></style>
