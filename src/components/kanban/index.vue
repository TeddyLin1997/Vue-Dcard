<template lang="pug">
  .kanban
    //- 看板群標題
    h1.kanban__title(v-if="data.title") {{ data.title }}
    //- 看板項目
    .kanban__group(v-if="data.data.length")
      router-link.kanban__item(v-for="kanban of data.data" :key="kanban.name" :to="kanban.code")
        circle-icon(:icon="kanban.icon" :icon-size="iconSize" :color="color" :background-color="backgroundColor")
        .content
          span {{ kanban.name }}
    
  
</template>

<script>
import circleIcon from "@/components/circle-icon";

export default {
  name: "kanban",

  components: {
    circleIcon
  },

  props: {
    data: {
      type: Object,
      default() {
        return { title: "", data: [] };
      }
    },

    iconSize: {
      type: Number,
      default: 16
    },

    color: {
      type: String,
      default: "#000"
    },

    backgroundColor: {
      type: String,
      default: "#fff"
    }
  }
};
</script>

<style lang="scss" scoped>
.kanban {
  margin-bottom: 1rem;
  width: 200px;
  text-align: left;
}

.kanban__title {
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
