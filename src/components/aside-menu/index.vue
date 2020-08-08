<template lang="pug">
  .aside-menu
    kanban(:kanbanData="kanbanList.defalut")
    kanban(:kanbanData="kanbanList.follows")
    kanban(:kanbanData="kanbanList.featured")
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
      kanbanList: KANBAN_LIST
    };
  }
};
</script>

<style></style>
