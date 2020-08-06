<template lang="pug">
  .page
    main.layout__main
      asideMenu.aside
      .router__view
        router-view
      .facebook
        iframe(src="//www.facebook.com/plugins/likebox.php?href=https://www.facebook.com%2Fdcard.tw&width=280&height=220&show_facepile=false")

</template>

<script>
import headerBar from "@/components/header-bar";
import asideMenu from "@/components/aside-menu";

export default {
  name: "page",
  components: {
    headerBar,
    asideMenu
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
