<template lang="pug">
.header__fixed
  .header__bar
    h1 Dcard
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
  }
};
</script>

<style lang="scss" scoped>
.header__fixed {
  position: fixed;
  width: 100%;
  background-color: $skyBlue;
}
.header__bar {
  @include flex(row, space-between);
  margin: 0 18%;
  height: 50px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    line-height: 50px;
  }

  .search {
    max-width: 500px;
    width: 100%;
  }
}
</style>
