<template lang="pug">
  .login
    .title
      h1 註冊/登入

    //- 切換tab
    .tabs
      .tab(
        v-for="page of pageList"
        :key="page.id"
        @click="changePage(page.code)"
        :class="isActive(page.code, 'object')"
      ) 
        awesome-icon(:icon="page.icon")
        span &nbsp {{ page.label }}
    
    //- 輸入框
    div(v-for="page of pageList" :key="page.id")
      .window(v-if="isActive(page.code)")
        .account
          span 信箱
          input(type="text" placeholder="請輸入信箱" @keyup.enter="submit(page.code)" v-model="userForm[page.code].account")
        .password
          span 密碼
          input(type="password" placeholder=" 請輸入密碼" @keyup.enter="submit(page.code)" v-model="userForm[page.code].password")
        button(@click="submit(page.code)") 送出
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",

  data() {
    return {
      active: "login",
      pageList: [
        { id: 0, label: "登入", code: "login", icon: ["fas", "user-friends"] },
        { id: 1, label: "註冊", code: "register", icon: ["fas", "user-plus"] }
      ],

      // 登入/註冊 表單
      userForm: {
        login: {
          account: "",
          password: ""
        },
        register: {
          account: "",
          password: ""
        }
      }
    };
  },

  computed: {
    activePage() {
      return {
        login: this.active === this.pageList[0],
        register: this.active === this.pageList[1]
      };
    }
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    // 表單送出按鈕
    submit(code) {
      // 登入
      if (code === "login") {
        this.$auth
          .signInWithEmailAndPassword(
            this.userForm.login.account,
            this.userForm.login.password
          )
          .then(() => this.$message("成功"))
          .then(() => this.saveUserInfo())
          .then(() => this.$router.push({ path: "/" }))
          .catch(err => this.$message(err.message, "error"));
      }
      // 註冊
      if (code === "register") {
        this.$auth
          .createUserWithEmailAndPassword(
            this.userForm.register.account,
            this.userForm.register.password
          )
          .then(() => this.$message("成功"))
          .catch(err => this.$message(err.message, "error"));
      }
    },

    // 切換頁
    changePage(value) {
      this.active = value;
    },

    // 簡化template
    isActive(code, type = "bool") {
      if (type === "bool") return this.active === code;
      if (type === "object") return { active: this.active === code };
    },

    // 設定使用者資料
    saveUserInfo() {
      const user = this.$auth.currentUser;

      if (user) {
        const userInfo = { email: user.email, uid: user.uid };
        this.setUserInfo(userInfo);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
