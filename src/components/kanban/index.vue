<template lang="pug">
  .kanban
    //- 看板群標題
    h1.kanban__title(v-if="kanbanData.title") {{ kanbanData.title }}
    //- 看板項目
    .kanban__group(v-if="kanbanData.data.length")
      .kanban__item(v-for="kanban of kanbanData.data" :key="kanban.name")
        .circle
          awesome-icon.icon(:icon="kanban.icon")
        .content
          span {{ kanban.name }}
    
  
</template>

<script>
export default {
  name: "kanban",

  props: {
    kanbanData: {
      type: Object,
      default() {
        return { title: "", data: [] };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.kanban {
  margin-bottom: 1rem;
  text-align: left;
  width: 200px;
}

.kanban__title {
  margin-bottom: 0.5rem;
  color: #aaaaaa;
}

.kanban__item {
  @include flex(row, space-between);
  padding: 10px;
  height: 50px;
  line-height: 30px;
  transition: all 0.2s;
  border-radius: 5px;

  &:hover {
    background-color: #04283f;
    cursor: pointer;
  }

  .circle {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    text-align: center;
    background-color: white;
    color: black;
  }

  .content {
    line-height: 30px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
  }
}
</style>
