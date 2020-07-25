<template lang="pug">
  #app
    headerBar
    aside 123123
    main.layout__main
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
