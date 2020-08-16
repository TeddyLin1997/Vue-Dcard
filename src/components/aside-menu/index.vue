<template lang="pug">
  .aside-menu
    //- 預設看板
    //- .kanban__group
    //-   .kanban__title {{ defaultList.title }}
    //-   router-link.kanban__item(v-for="kanban of defaultList.data" :key="kanban.code" :to="{ name: kanban.code }")
    //-     circle-icon(:icon="kanban.icon" :icon-size="18" :color="kanban.fontColor" :background-color="kanban.color")
    //-     span.content {{ kanban.name }}
    //- 精選看板
    .kanban__group
      .kanban__title {{ kanbanList.title }}
      router-link.kanban__item(v-for="kanban of kanbanList.data" :key="kanban.code" :to="{ name: 'kanban', params: { kanban: kanban.code } }")
        circle-icon(:icon="kanban.icon" :icon-size="18" :color="kanban.fontColor" :background-color="kanban.color")
        span.content {{ kanban.name }}
</template>

<script>
import circleIcon from "@/components/circle-icon";
import { DEFAULT_LIST, KANBAN_LIST } from "@/config/site";

export default {
  name: "aside-menu",

  components: {
    circleIcon
  },

  data() {
    return {
      // 預設看板
      kanbanList: KANBAN_LIST,
      defaultList: DEFAULT_LIST
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
