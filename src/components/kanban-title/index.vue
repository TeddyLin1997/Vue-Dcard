<template lang="pug">
.kanban__header__title(:class="{ 'border' : border }")
  .kanban__name
    circle-icon(:icon="kanban.icon" :icon-size="20" :border-size="40" :color="kanban.fontColor" :background-color="kanban.color")
    span {{ kanban.name }}
  .kanban__follow
    button.followed(v-if="hasFollowed" @click="changeKanban('remove', kanban.code)") 追蹤中
    button(v-else @click="changeKanban('follow', kanban.code)") 追蹤
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deepCopy } from "@/helper";
import circleIcon from "@/components/circle-icon";

export default {
  name: "kanabn-title",

  components: {
    circleIcon
  },

  props: {
    kanban: Object,
    border: Boolean
  },

  computed: {
    ...mapState(["userInfo"]),

    hasFollowed() {
      return this.userInfo.kanban.includes(this.kanban.code);
    }
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    changeKanban(action, code) {
      const submitData = deepCopy(this.userInfo);

      if (action === "follow") submitData.kanban.push(code);
      else {
        const index = submitData.kanban.findIndex(item => item === code);
        submitData.kanban.splice(index, 1);
      }

      // 設置本地vuex、遠端資料庫
      this.setUserInfo(submitData);
      this.$database.setUser(submitData.uid, this.userInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
