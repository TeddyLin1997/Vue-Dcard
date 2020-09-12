<template lang="pug">
  .function-bar
    div(v-for="item of functionList" :key="item.id" :class="{ 'active' : isActive(item.id) }" @click="getEvent(item.id)")
      awesome-icon.icon(:icon="item.icon")
      template(v-if="item.id === 'dropdown'")
        transition(name="dropdown")
          popover(v-show="openDropDown")
            div(@click="logOut()")
              span 登出
        
</template>

<script>
import { mapActions } from "vuex";
import { FUNCTION_LIST } from "@/config/site";
import popover from "@/components/popover";

export default {
  name: "function-bar",

  components: {
    popover
  },

  data() {
    return {
      functionList: FUNCTION_LIST,
      openDropDown: false,
      active: null
    };
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    isActive(action) {
      return this.active === action;
    },

    getEvent(action) {
      if (action === "dropdown")
        return (this.openDropDown = !this.openDropDown);
      if (["notify", "lottery", "e-mail"].includes(action))
        return this.$message("尚未啟用功能");

      this.active = action;

      this.$router.push({ name: action }).catch(() => {});
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

  & > div {
    @include flex();
    margin: auto;
    width: 50px;
    height: 50px;
    text-align: center;
  }
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

.active {
  background-color: $darkBlue;
  transition: all 0.5s;
}
</style>
