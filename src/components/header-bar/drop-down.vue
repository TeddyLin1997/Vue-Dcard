<template lang="pug">
  .drop-down
    div(v-for="item in dropDownList" :key="item.id" @click="handleEvent(item.id)") {{ item.label }}
      
</template>

<script>
export default {
  name: "drop-down",

  data() {
    return {
      dropDownList: [{ id: "logout", label: "登出" }]
    };
  },

  methods: {
    handleEvent(action) {
      if (action === "logout") this.logOut();
    },

    logOut() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      this.$message("成功登出");
    }
  }
};
</script>

<style lang="scss" scoped>
.drop-down {
  position: absolute;
  top: 3.5rem;
  right: 0.6rem;
  width: 140px;
  padding: 0.6rem 1rem;
  background-color: white;
  border-radius: 0.4rem;

  div {
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    top: -0.6rem;
    right: 1rem;
    border-bottom: 10px solid white;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
}
</style>
