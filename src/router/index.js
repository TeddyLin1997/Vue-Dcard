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
  const userInfo = router.app.$root.$store.state.userInfo;

  // 防止無限跳轉
  if (to.name === "login") return next();

  if (userInfo === null) return next({ name: "login" });
  else if (to.name === null) return next({ name: "home" });
  else return next({ name: to.name });
};

router.beforeEach((to, from, next) => {
  checkUser(to, from, next);
});

export default router;
