import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./map";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const checkUser = async (to, from, next) => {
  await router.app.$root;
  if (to.name === "login") return next();
  if (router.app.$root.$store.state.userInfo) return next();
  else return next({ name: "login" });

  // router.app.$root.$message("請登入帳號，即可使用相關功能");
  // next({ name: "login" });
};

router.beforeEach((to, from, next) => {
  checkUser(to, from, next);
});

export default router;
