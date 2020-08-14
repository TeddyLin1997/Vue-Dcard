<template lang="pug">
  #user
    .aside
      //- 個人資料
      .avatar
        img(src="https://picsum.photos/100/100?random=7414")
      .name {{ userInfo.name }}
      .school {{ userInfo.school }}
      //- 導覽列
      article
        .kanban__item(v-for="item of userNavigationList" :key="item.code" )
          circle-icon(:icon="item.icon" :icon-size="18")
          span.content {{ item.name }}

    .main
</template>

<script>
import circleIcon from "@/components/circle-icon";
import { USER_NAVIGATION_LIST } from "@/config/site";
import { mapState } from "vuex";

export default {
  name: "user",

  components: {
    circleIcon
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
