export const FUNCTION_LIST = [
  { id: "new-post", name: "發文", icon: ["fas", "pen"] },
  { id: "notify", name: "通知", icon: ["fas", "bell"] },
  { id: "lottery", name: "抽卡", icon: ["fas", "dice-d6"] },
  { id: "e-mail", name: "個人信箱", icon: ["fas", "envelope"] },
  { id: "user", name: "個人資料", icon: ["fas", "user"] },
  { id: "dropdown", name: "下拉選單", icon: ["fas", "caret-down"] }
];

// 看板分類排行
export const TAB_LIST = [
  "全部",
  "追蹤",
  "熱門",
  "即時",
  "😍 愛心",
  "😡 森77",
  "😢 嗚嗚",
  "🤣 哈哈",
  "😲 驚訝",
  "🙇 跪"
];

// 預設看板
export const DEFAULT_LIST = {
  title: "",
  data: [
    {
      name: "所有看板",
      icon: ["fas", "list"],
      code: "all",
      color: "#006aa6",
      fontColor: "#fff"
    }
  ]
};

// 看板列表
export const KANBAN_LIST = {
  title: "Dacrd 精選看板",
  data: [
    {
      name: "穿搭",
      icon: ["fas", "tshirt"],
      code: "wear",
      color: "#34A7E6",
      fontColor: "#eee"
    },
    {
      name: "成長",
      icon: ["fas", "shoe-prints"],
      code: "grow",
      color: "#7e511b",
      fontColor: "#000"
    },
    {
      name: "程式語言",
      icon: ["fas", "bug"],
      code: "program",
      color: "#3c4e60",
      fontColor: "#ee3a42"
    },
    {
      name: "運動",
      icon: ["fas", "running"],
      code: "sport",
      color: "#01e4ea",
      fontColor: "#020003"
    },
    {
      name: "理財",
      icon: ["fas", "dollar-sign"],
      code: "financial",
      color: "#000",
      fontColor: "#e9c01f"
    },
    {
      name: "食物",
      icon: ["fas", "hamburger"],
      code: "food",
      color: "#2a7544",
      fontColor: "#dcbc89"
    },
    {
      name: "西斯",
      icon: ["fas", "car"],
      code: "sex",
      color: "#f90000",
      fontColor: "#fff"
    },
    {
      name: "Apple",
      icon: ["fas", "apple-alt"],
      code: "apple",
      color: "#000",
      fontColor: "#fff"
    },
    {
      name: "疫情",
      icon: ["fas", "biohazard"],
      code: "covid19",
      color: "#444",
      fontColor: "#ff0000"
    },
    {
      name: "Podcast",
      icon: ["fas", "microphone"],
      code: "podcast",
      color: "#8338bf",
      fontColor: "#fff"
    },
    {
      name: "居家生活",
      icon: ["fas", "home"],
      code: "house",
      color: "#73b537",
      fontColor: "#683a0e"
    },
    {
      name: "追星",
      icon: ["fas", "star"],
      code: "star",
      color: "#00324e",
      fontColor: "#f4b400"
    },
    {
      name: "閒聊",
      icon: ["fas", "comment"],
      code: "talk",
      color: "#41c206",
      fontColor: "#fff"
    },
    {
      name: "有趣",
      icon: ["fas", "grin-alt"],
      code: "interest",
      color: "#6e6d69",
      fontColor: "#f7cf48"
    },
    {
      name: "感情",
      icon: ["fas", "heart"],
      code: "love",
      color: "#00588a",
      fontColor: "#f90707"
    },
    {
      name: "廣告",
      icon: ["fas", "ad"],
      code: "ad",
      color: "#f5ac3a",
      fontColor: "#000"
    },
    {
      name: "攝影",
      icon: ["fas", "camera"],
      code: "photograph",
      color: "#4b4b49",
      fontColor: "#059de2"
    }
  ]
};

// 使用者導覽列
export const USER_NAVIGATION_LIST = [
  {
    name: "我的收藏",
    icon: ["fas", "bookmark"],
    code: "collect",
    color: "#00324e",
    fontColor: "#ee7832"
  },
  {
    name: "我追蹤的看板",
    icon: ["fas", "heart"],
    code: "follow",
    color: "#00324e",
    fontColor: "#c84865"
  },
  {
    name: "我發表的文章",
    icon: ["fas", "pencil-alt"],
    code: "post",
    color: "#00324e",
    fontColor: "#f6bf02"
  }
];
