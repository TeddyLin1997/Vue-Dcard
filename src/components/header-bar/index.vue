<template lang="pug">
.header-bar
  .header
    h1(@click="goHomePage()") Dcard
    searchInput.search
    functionBar
</template>

<script>
import searchInput from "./search-input";
import functionBar from "./function-bar";

export default {
  name: "header-bar",

  components: {
    searchInput,
    functionBar
  },

  methods: {
    goHomePage() {
      if (this.$route.path === "/") return location.reload();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
.header-bar {
  padding: 0 30px;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: $skyBlue;
  z-index: 10;
}
.header {
  @include flex(row, space-between);
  margin: 0 auto;
  max-width: 1280px;
  height: 50px;

  h1 {
    padding-left: 10px;
    min-width: 200px;
    font-size: 2rem;
    text-align: left;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-3px);
    }
  }

  .search {
    max-width: 500px;
    width: 100%;
  }
}
</style>
