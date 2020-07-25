<template lang="pug">
  .function-bar
    awesome-icon.icon(v-for="item of functionList" :key="item.name" :icon="item.icon" @click="getEvent")
</template>

<script>
export default {
  name: "function-bar",

  data() {
    return {
      functionList: [
        { name: "發文", icon: ["fas", "pen"] },
        { name: "通知", icon: ["fas", "bell"] },
        { name: "抽卡", icon: ["fas", "dice-d6"] },
        {
          name: "個人信箱",
          icon: ["fas", "envelope"]
        },
        {
          name: "個人資料",
          icon: ["fas", "user"]
        },
        {
          name: "下拉選單",
          icon: ["fas", "caret-down"]
        }
      ]
    };
  },

  methods: {
    getEvent() {}
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
</style>
