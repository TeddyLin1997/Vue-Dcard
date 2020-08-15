export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user")
  },
  {
    path: "/mail",
    name: "mail",
    component: () => import("@/views/mail")
  },
  {
    path: "/lottery",
    name: "lottery",
    component: () => import("@/views/lottery")
  },
  {
    path: "/new-post",
    name: "new-post",
    component: () => import("@/views/new-post")
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
        path: "mit",
        name: "mit",
        component: () => import("@/views/page/mit")
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
