<template lang="pug">
  .user
    header
      span 追蹤的看板

    body
      .no-collect(v-if="noHaveCollect")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的看板
      .section(v-else)
        kanban-title(v-for="kanban of dataList" :key="kanban.code" :kanban="kanban" border)

</template>

<script>
import { mapState } from "vuex";
import kanbanTitle from "@/components/kanban-title";

export default {
  name: "user-follow",

  components: {
    kanbanTitle
  },

  computed: {
    ...mapState(["userInfo", "kanbanList"]),

    userKanbanList() {
      return this.userInfo.kanban || [];
    },

    noHaveCollect() {
      return this.userKanbanList.length === 0;
    },

    dataList() {
      const result = [];

      this.userKanbanList.forEach(kanban => {
        result.push(this.kanbanList.find(item => item.code === kanban));
      });

      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./user-style.scss";
</style>
