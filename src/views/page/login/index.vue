<template lang="pug">
  .login
    .login__window
      h1 開始使用
      .account
        span 帳號
        input(type="text")
      .password
        span 密碼
        input(type="password")
      button 登入

    message-box(content="請先登入帳號")
</template>

<script>
import messageBox from "@/components/message-box";

export default {
  name: "login",

  components: {
    messageBox
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
