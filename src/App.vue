<template lang="pug">
  #app
    headerBar
    #nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<script>
import headerBar from "@/components/header-bar";

export default {
  name: "app",
  components: {
    headerBar
  }
};
</script>

<style lang="scss">
#app {
  width: 500px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
