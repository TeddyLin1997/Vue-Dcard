export const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/page/login")
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/page/home")
  },
  {
    path: "/all",
    name: "all",
    component: () => import(/* webpackChunkName: "all" */ "@/views/page/all")
  },
  {
    path: "/game",
    name: "game",
    component: () => import(/* webpackChunkName: "game" */ "@/views/page/game")
  },
  {
    path: "/goods",
    name: "goods",
    component: () =>
      import(/* webpackChunkName: "goods" */ "@/views/page/goods")
  },
  {
    path: "/hot",
    name: "hot",
    component: () => import(/* webpackChunkName: "hot" */ "@/views/page/hot")
  },
  {
    path: "/mit",
    name: "mit",
    component: () => import(/* webpackChunkName: "mit" */ "@/views/page/mit")
  },
  {
    path: "/novice",
    name: "novice",
    component: () =>
      import(/* webpackChunkName: "novice" */ "@/views/page/novice")
  }
];
