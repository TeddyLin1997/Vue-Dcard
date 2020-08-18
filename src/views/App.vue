<template lang="pug">
  #app
    headerBar
    transition(name="router")
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
