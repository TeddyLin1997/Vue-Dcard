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
        path: "wear",
        name: "wear",
        component: () => import("@/views/page/wear")
      },
      {
        path: "program",
        name: "program",
        component: () => import("@/views/page/program")
      },
      {
        path: "grow",
        name: "grow",
        component: () => import("@/views/page/grow")
      },
      {
        path: "sport",
        name: "sport",
        component: () => import("@/views/page/sport")
      },
      {
        path: "financial",
        name: "financial",
        component: () => import("@/views/page/financial")
      },
      {
        path: "food",
        name: "food",
        component: () => import("@/views/page/food")
      },
      {
        path: "sex",
        name: "sex",
        component: () => import("@/views/page/sex")
      },
      {
        path: "covid19",
        name: "covid19",
        component: () => import("@/views/page/covid19")
      },
      {
        path: "apple",
        name: "apple",
        component: () => import("@/views/page/apple")
      },
      {
        path: "podcast",
        name: "podcast",
        component: () => import("@/views/page/podcast")
      },
      {
        path: "house",
        name: "house",
        component: () => import("@/views/page/house")
      },
      {
        path: "star",
        name: "star",
        component: () => import("@/views/page/star")
      },
      {
        path: "talk",
        name: "talk",
        component: () => import("@/views/page/talk")
      },
      {
        path: "interest",
        name: "interest",
        component: () => import("@/views/page/interest")
      },
      {
        path: "love",
        name: "love",
        component: () => import("@/views/page/love")
      },
      {
        path: "ad",
        name: "ad",
        component: () => import("@/views/page/ad")
      },
      {
        path: "photograph",
        name: "photograph",
        component: () => import("@/views/page/photograph")
      }
    ]
  }
];
