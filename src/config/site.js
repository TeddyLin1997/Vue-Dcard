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

// 看板列表
export const KANBAN_LIST = {
  // 預設看板
  defalut: {
    title: "",
    data: [
      { name: "所有看板", icon: ["fas", "list"], code: "all" },
      { name: "即時熱門看板", icon: ["fas", "fire"], code: "hot" },
      {
        name: "好物研究室",
        icon: ["fas", "store-alt"],
        code: "goods"
      },
      { name: "遊戲專區", icon: ["fas", "gamepad"], code: "game" },
      {
        name: "社會新鮮人熱門看版",
        icon: ["fas", "briefcase"],
        code: "novice"
      }
    ]
  },

  // 追蹤看版
  follows: {
    title: "追蹤的看版",
    data: [
      {
        name: "麻省理工學院",
        icon: ["fas", "graduation-cap"],
        code: "mit"
      }
    ]
  },

  // 精選看板
  featured: {
    title: "Dacrd 精選看板",
    data: [
      { name: "穿搭", icon: ["fas", "tshirt"], code: "wear" },
      { name: "程式語言", icon: ["fas", "bug"], code: "program" },
      { name: "成長", icon: ["fas", "shoe-prints"], code: "grow" },
      { name: "運動", icon: ["fas", "running"], code: "sport" },
      { name: "理財", icon: ["fas", "dollar-sign"], code: "financial" },
      { name: "食物", icon: ["fas", "hamburger"], code: "food" },
      { name: "西斯", icon: ["fas", "car"], code: "sex" },
      { name: "疫情", icon: ["fas", "biohazard"], code: "covid19" },
      { name: "Apple", icon: ["fas", "apple-alt"], code: "apple" },
      { name: "Podcast", icon: ["fas", "microphone"], code: "podcast" },
      { name: "居家生活", icon: ["fas", "home"], code: "house" },
      { name: "追星", icon: ["fas", "star"], code: "star" },
      { name: "閒聊", icon: ["fas", "comment"], code: "talk" },
      { name: "有趣", icon: ["fas", "grin-alt"], code: "interest" },
      { name: "感情", icon: ["fas", "heart"], code: "love" },
      { name: "廣告", icon: ["fas", "ad"], code: "ad" },
      { name: "攝影", icon: ["fas", "camera"], code: "photograph" }
    ]
  }
};

// 使用者導覽列
export const USER_NAVIGATION_LIST = {
  title: "",
  data: [
    { name: "我的收藏", icon: ["fas", "bookmark"], code: "collect" },
    { name: "我追蹤的看板", icon: ["fas", "heart"], code: "followkanban" },
    { name: "我追蹤的卡稱", icon: ["fas", "rss"], code: "followid" },
    { name: "我發表的文章", icon: ["fas", "pen-square"], code: "article" },
    { name: "抽卡自我介紹", icon: ["fas", "dice-d6"], code: "introduction" },
    { name: "我的卡稱", icon: ["fas", "id-badge"], code: "id" },
    { name: "我的卡友", icon: ["fas", "user-friends"], code: "friend" },
    { name: "設定", icon: ["fas", "cog"], code: "setting" }
  ]
};
