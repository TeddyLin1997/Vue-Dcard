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
      button(@click="login()") 登入
</template>

<script>
export default {
  name: "login",

  methods: {
    login() {}
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
