<template lang="pug">
.kanban__header__title
  .kanban__name
    slot
  .kanban__follow
    button.followed(v-if="hasFollowed" @click="changeKanban('remove', code)") 追蹤中
    button(v-else @click="changeKanban('follow', code)") 追蹤
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deepCopy } from "@/helper";

export default {
  name: "kanabn-title",

  props: {
    code: String
  },

  computed: {
    ...mapState(["userInfo"]),

    hasFollowed() {
      return this.userInfo.kanban.includes(this.code);
    }
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    changeKanban(action, code) {
      const path = `user/${this.userInfo.uid}`;
      const submitData = deepCopy(this.userInfo);

      if (action === "follow") submitData.kanban.push(code);
      else {
        const index = submitData.kanban.findIndex(item => item === code);
        submitData.kanban.splice(index, 1);
      }

      this.setUserInfo(submitData);
      this.$database.setUser(path, this.userInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
