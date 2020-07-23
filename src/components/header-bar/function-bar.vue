<template lang="pug">
  .function__bar
    icon.icon(v-for="item of functionList" :key="item.name" :icon="item.icon" @click="item.clickEvent")
</template>

<script>
export default {
  name: "function-bar",

  data() {
    return {
      functionList: [
        { name: "發文", icon: ["fas", "pen"], clickEvent: this.getEvent() },
        { name: "通知", icon: ["fas", "bell"], clickEvent: this.getEvent() },
        { name: "抽卡", icon: ["fas", "dice-d6"], clickEvent: this.getEvent() },
        {
          name: "個人信箱",
          icon: ["fas", "envelope"],
          clickEvent: this.getEvent()
        },
        {
          name: "個人資料",
          icon: ["fas", "user"],
          clickEvent: this.getEvent()
        },
        {
          name: "下拉選單",
          icon: ["fas", "caret-down"],
          clickEvent: this.getEvent()
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
.function__bar {
  @include flex(row, space-between, center);
  width: 280px;
}

.icon {
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
}
</style>
