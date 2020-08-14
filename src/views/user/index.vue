<template lang="pug">
  #user
    .nav
      .avatar
        img(src="https://picsum.photos/100/100?random=7414")
      .name {{ userInfo.name }}
      .school {{ userInfo.school }}
      kanban(:data="userNavigationList" :icon-size="20" color="#3397cf" background-color="#00324e")
    .main
</template>

<script>
import { USER_NAVIGATION_LIST } from "@/config/site";
import kanban from "@/components/kanban";
import { mapState } from "vuex";

export default {
  name: "user",

  components: {
    kanban
  },

  data() {
    return {
      userNavigationList: USER_NAVIGATION_LIST
    };
  },

  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
