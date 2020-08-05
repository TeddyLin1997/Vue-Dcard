<template lang="pug">
  .function-bar
    awesome-icon.icon(v-for="item of functionList" :key="item.name" :icon="item.icon" @click="getEvent(item.id)")
    
    transition(name="dropdown")
      drop-down(v-show="openDropDown")
</template>

<script>
import dropDown from "./drop-down";

const functionList = [
  { id: "post", name: "發文", icon: ["fas", "pen"] },
  { id: "notice", name: "通知", icon: ["fas", "bell"] },
  { id: "card", name: "抽卡", icon: ["fas", "dice-d6"] },
  { id: "mail", name: "個人信箱", icon: ["fas", "envelope"] },
  { id: "info", name: "個人資料", icon: ["fas", "user"] },
  { id: "dropdown", name: "下拉選單", icon: ["fas", "caret-down"] }
];

export default {
  name: "function-bar",

  components: {
    dropDown
  },

  data() {
    return {
      functionList: functionList,
      openDropDown: false
    };
  },

  methods: {
    getEvent(action) {
      if (action === "dropdown") this.openDropDown = !this.openDropDown;
    }
  }
};
</script>

<style lang="scss" scoped>
.function-bar {
  @include flex(row, space-between, center);
  min-width: 280px;
}

.icon {
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: 0.2s;
}
</style>
