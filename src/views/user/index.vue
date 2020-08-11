<template lang="pug">
  #user
    .nav
      .avatar
        img(src="https://picsum.photos/100/100?random=7414")
      .name 林聖暠
      .school 麻省理工學院
      kanban(:data="userNavigationList" :icon-size="20" color="#3397cf" background-color="#00324e")
    .main
</template>

<script>
import { USER_NAVIGATION_LIST } from "@/config/site";
import kanban from "@/components/kanban";

export default {
  name: "user",

  components: {
    kanban
  },

  data() {
    return {
      userNavigationList: USER_NAVIGATION_LIST
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
