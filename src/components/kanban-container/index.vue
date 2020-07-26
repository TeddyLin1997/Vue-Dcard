<template lang="pug">
    .kanban-container
      slot(name="header")
      slot(name="article")
      slot(name="footer")
</template>

<script>
export default {
  name: "kanban-container"
};
</script>

<style lang="scss" scoped>
.kanban-container {
  height: 100%;
}
</style>
