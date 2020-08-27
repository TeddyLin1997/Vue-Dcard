<template lang="pug">
  #user-follow-kanban
    header
      span 追蹤的看板

    body
      .no-collect(v-if="noHaveCollect")
        img(src="@/assets/images/collect.png")
        span 沒有收藏的看板
      .section(v-else)
        kanban-title(v-for="kanban of dataList" :key="kanban.code" :kanban="kanban" border)

</template>

<script>
import { mapState } from "vuex";
import kanbanTitle from "@/components/kanban-title";

export default {
  name: "user-collect",

  components: {
    kanbanTitle
  },

  computed: {
    ...mapState(["userInfo", "kanbanList"]),

    noHaveCollect() {
      return this.userInfo.kanban.length === 0;
    },

    dataList() {
      const result = [];
      this.userInfo.kanban.forEach(kanban => {
        result.push(this.kanbanList.find(item => item.code === kanban));
      });
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  max-height: 560px;
  overflow: auto;
}

#user-collect,
.no-collect,
body {
  @include flex(column);
}

header {
  padding: 0.4rem 0;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #00000044;
  span {
    font-size: 1.6rem;
  }
}

body {
  width: 100%;
}

.no-collect {
  img {
    margin: 1rem;
    width: 280px;
    height: auto;
  }
}
</style>
