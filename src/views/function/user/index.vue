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
        .kanban__item(v-for="item of userNavigationList" :key="item.code" @click="getActivePage(item.code)")
          circle-icon(:icon="item.icon" :icon-size="18" :color="item.fontColor" :background-color="item.color")
          span.content {{ item.name }}

    main
      user-collect(v-show="visible.userCollect")
      user-follow-kanban(v-show="visible.userFollowKanban")
      
</template>

<script>
import circleIcon from "@/components/circle-icon";
import { USER_NAVIGATION_LIST } from "@/config/site";
import { mapState } from "vuex";
import userCollect from "./user-collect";
import userFollowKanban from "./user-follow-kanban";

export default {
  name: "user",

  components: {
    circleIcon,
    userCollect,
    userFollowKanban
  },

  data() {
    return {
      userNavigationList: USER_NAVIGATION_LIST,
      activePage: "collect"
    };
  },

  computed: {
    ...mapState(["userInfo"]),

    visible() {
      return {
        userCollect: this.activePage === "collect",
        userFollowKanban: this.activePage === "followkanban"
      };
    }
  },

  methods: {
    getActivePage(code) {
      this.activePage = code;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
