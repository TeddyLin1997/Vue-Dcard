<template lang="pug">
  .aside-menu
    .kanban__group(v-for="kanban of kanbanList" :key="kanban.title")
      .kanban__title(slot="title") 追蹤的看板
      router-link.kanban__item(
        slot="content"
        v-for="item of kanban.data"
        :key="item.code"
        :to="item.code"
      )
        circle-icon(
          :icon="item.icon"
          :icon-size="18"
          :color="item.fontColor"
          :background-color="item.color"
        )
        .content
          span {{ item.name }}
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
.kanban__group {
  margin-bottom: 1rem;
  width: 200px;
  text-align: left;
}

.kanban__title {
  text-align: left;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #aaaaaa;
}

.kanban__item {
  @include flex(row, space-between);
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #04283f;
    cursor: pointer;
  }

  .content {
    line-height: 30px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }
}
</style>
