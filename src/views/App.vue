<template lang="pug">
  #app
    headerBar
    .body
      main.layout__main
        asideMenu.aside
        .router__view
          router-view
        .advertising
</template>

<script>
import headerBar from "@/components/header-bar";
import asideMenu from "@/components/aside-menu";

export default {
  name: "app",
  components: {
    headerBar,
    asideMenu
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
