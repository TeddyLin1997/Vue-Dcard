<template lang="pug">
  .login(v-loading="loading")
    .title
      h1 註冊/登入

    //- 切換tab
    .tabs
      .tab(
        v-for="page of pageList"
        :key="page.id"
        @click="changePage(page.code)"
        :class="{ 'active' : activePage[page.code] }"
      ) 
        awesome-icon(:icon="page.icon")
        span &nbsp {{ page.label }}
    
    //- 輸入框
    .window
      div(v-show="activePage.register")
        span 名稱
        input(v-model="userForm[active].name" type="text" placeholder="請輸入名稱")
      div(v-show="activePage.register")
        span 學校
        input(v-model="userForm[active].school" type="text" placeholder="請輸入學校")
      div
        span 信箱
        input(v-model="userForm[active].account" type="text" placeholder="請輸入信箱")
      div
        span 密碼
        input(v-model="userForm[active].password" type="password" placeholder=" 請輸入密碼" @keyup.enter="submit(active)")
      button(@click="submit(active)") 送出
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",

  data() {
    return {
      loading: false,
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
          password: "",
          name: "",
          school: ""
        }
      }
    };
  },

  computed: {
    activePage() {
      return {
        login: this.active === this.pageList[0].code,
        register: this.active === this.pageList[1].code
      };
    }
  },

  methods: {
    ...mapActions(["setUserInfo"]),

    clearRegisterForm() {
      this.userForm.register.account = "";
      this.userForm.register.password = "";
      this.userForm.register.name = "";
      this.userForm.register.school = "";
    },

    // 表單送出按鈕
    async submit(code) {
      this.loading = true;
      // 登入
      if (code === "login") {
        await this.$auth
          .signInWithEmailAndPassword(
            this.userForm.login.account,
            this.userForm.login.password
          )
          .then(() => this.saveUserInfo())
          .then(() => this.$router.push({ name: "home" }))
          .then(() => this.$message("成功"))
          .catch(err => this.$message(err.message, "error"));
      }
      // 註冊
      if (code === "register") {
        const submitUserInfo = { ...this.userForm.register };
        await this.$auth
          .createUserWithEmailAndPassword(
            this.userForm.register.account,
            this.userForm.register.password
          )
          .then(res => {
            this.$database.setUser({ ...submitUserInfo, uid: res.user.uid });
          })
          .then(() => {
            this.$message("成功");
            this.active = "login";
            this.clearRegisterForm();
            this.userForm.login.account = submitUserInfo.account;
            this.userForm.login.password = submitUserInfo.password;
          })
          .catch(err => this.$message(err.message, "error"));
      }
      this.loading = false;
    },

    // 切換頁
    changePage(value) {
      this.active = value;
    },

    // 設定使用者資料
    async saveUserInfo() {
      const user = this.$auth.currentUser;

      if (user) {
        const userInfo = await this.$database.getUser(user.uid);
        this.setUserInfo(userInfo);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
