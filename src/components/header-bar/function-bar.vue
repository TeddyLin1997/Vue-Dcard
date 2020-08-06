<template lang="pug">
  .function-bar
    div(v-for="item of functionList" :key="item.name" @click="getEvent(item.id)")
      awesome-icon.icon(:icon="item.icon")
      template(v-if="item.id === 'dropdown'")
        transition(name="dropdown")
          popover(v-show="openDropDown")
            div(@click="logOut()")
              span 登出
        
</template>

<script>
import { mapActions } from "vuex";
import popover from "@/components/popover";

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
    popover
  },

  data() {
    return {
      functionList: functionList,
      openDropDown: false
    };
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    getEvent(action) {
      if (action === "dropdown") this.openDropDown = !this.openDropDown;

      if (action === "post") this.$router.push({ name: "new-post" });
    },

    logOut() {
      this.setUserInfo(null);
      this.$router.push({ name: "login" });
      this.$message("成功登出");
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
  color: #fff;
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
