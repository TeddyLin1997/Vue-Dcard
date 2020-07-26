<template lang="pug">
  .kanban-tabs
    .tabs__wrapper(ref="tabsWrapper" @scroll="getScroll")
      .tab(v-for="tab, index of data" :key="index" :class="{ 'active__tab': active === index }" @click="activeTab(index)" ) {{ tab }}
    //- 淡出效果
    .gradient(v-show="isScrollInRight")
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
      active: 0,
      isScrollInRight: true
    };
  },

  methods: {
    getScroll(event) {
      let tabs = event.target;
      this.isScrollInRight =
        tabs.clientWidth + tabs.scrollLeft !== tabs.scrollWidth;
    },

    activeTab(index) {
      this.active = index;
    }
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
    overflow: auto;
  }
  .tab {
    display: inline-block;
    width: 80px;
    padding-bottom: 10px;
    color: #999999;
    cursor: pointer;
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
