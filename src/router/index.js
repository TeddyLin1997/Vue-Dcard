import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/page/home.vue")
  },
  {
    path: "/all",
    name: "all",
    component: () =>
      import(/* webpackChunkName: "all" */ "@/views/page/all.vue")
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "game" */ "@/views/page/game.vue")
  },
  {
    path: "/goods",
    name: "goods",
    component: () =>
      import(/* webpackChunkName: "goods" */ "@/views/page/goods.vue")
  },
  {
    path: "/hot",
    name: "hot",
    component: () =>
      import(/* webpackChunkName: "hot" */ "@/views/page/hot.vue")
  },
  {
    path: "/mit",
    name: "mit",
    component: () =>
      import(/* webpackChunkName: "mit" */ "@/views/page/mit.vue")
  },
  {
    path: "/novice",
    name: "novice",
    component: () =>
      import(/* webpackChunkName: "novice" */ "@/views/page/novice.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
