export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/function/user",
    name: "user",
    component: () => import("@/views/function/user")
  },
  {
    path: "/function/e-mail",
    name: "e-mail",
    component: () => import("@/views/function/e-mail")
  },
  {
    path: "/function/lottery",
    name: "lottery",
    component: () => import("@/views/function/lottery")
  },
  {
    path: "/function/new-post",
    name: "new-post",
    component: () => import("@/views/function/new-post")
  },
  {
    path: "/",
    // 如果使用 to={name:page }，不會出現 => 預設子路由
    // name: "page",
    component: () => import("@/views/page"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/page/home")
      },
      {
        path: "all",
        name: "all",
        component: () => import("@/views/page/all")
      },
      {
        path: "game",
        name: "game",
        component: () => import("@/views/page/game")
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("@/views/page/goods")
      },
      {
        path: "hot",
        name: "hot",
        component: () => import("@/views/page/hot")
      },
      {
        path: "novice",
        name: "novice",
        component: () => import("@/views/page/novice")
      },
      {
        path: "/kanban/:kanban",
        name: "kanban",
        component: () => import("@/views/page/kanban")
      }
    ]
  }
];
