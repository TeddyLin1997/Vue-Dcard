<template lang="pug">
  .header__bar
    searchInput.search
    functionBar
</template>

<script>
import searchInput from "@/components/search-input";
import functionBar from "@/components/function-bar";

export default {
  name: "header-bar",

  components: {
    searchInput,
    functionBar
  }
};
</script>

<style lang="scss" scoped>
.header__bar {
  width: 100%;
  position: fixed;
  height: 50px;
  background-color: $skyBlue;
}
</style>
