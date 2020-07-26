<template lang="pug">
  .kanban-tabs
    .tabs__wrapper
      .tab(v-for="tab, index of data" :key="index" :class="{ 'active__tab': active === index }" ) {{ tab }}
      .gradient
</template>

<script>
export default {
  name: "kanban-tabs",

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.kanban-tabs {
  position: relative;
  padding: 0 40px;
  max-width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  .tabs__wrapper {
    width: 70%;
    overflow: scroll;
  }
  .tab {
    display: inline-block;
    width: 60px;
    padding-bottom: 10px;
    color: #999999;
  }
}

.active__tab {
  color: black !important;
  border-bottom: 3px solid $skyBlue;
}

.gradient {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
