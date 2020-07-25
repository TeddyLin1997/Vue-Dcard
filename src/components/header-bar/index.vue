<template lang="pug">
.header-bar
  .header
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
.header-bar {
  padding: 0 30px;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: $skyBlue;
  z-index: 1;
}
.header {
  @include flex(row, space-between);
  margin: 0 auto;
  max-width: 1280px;
  height: 50px;

  h1 {
    min-width: 200px;
    line-height: 50px;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    color: white;
  }

  .search {
    max-width: 500px;
    width: 100%;
  }
}
</style>
