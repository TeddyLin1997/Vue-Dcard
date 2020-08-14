<template lang="pug">
.kanban__header__title
  .kanban__name
    slot
  .kanban__follow
    button(type="button") 追蹤
</template>

<script>
export default {
  name: "kanabn-title"
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
