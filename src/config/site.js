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

export const KANBAN_LIST = {
  // 預設看板
  defalut: {
    title: "",
    data: [
      { name: "所有看板", icon: ["fas", "list"], routerName: "all" },
      { name: "即時熱門看板", icon: ["fas", "fire"], routerName: "hot" },
      {
        name: "好物研究室",
        icon: ["fas", "store-alt"],
        routerName: "goods"
      },
      { name: "遊戲專區", icon: ["fas", "gamepad"], routerName: "game" },
      {
        name: "社會新鮮人熱門看版",
        icon: ["fas", "briefcase"],
        routerName: "novice"
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
        routerName: "mit"
      }
    ]
  },

  // 精選看板
  featured: {
    title: "Dacrd 精選看板",
    data: [
      { name: "穿搭", icon: ["fas", "tshirt"], routerName: "all" },
      { name: "程式語言", icon: ["fas", "bug"], routerName: "all" },
      { name: "成長", icon: ["fas", "shoe-prints"], routerName: "all" },
      { name: "運動", icon: ["fas", "running"], routerName: "all" },
      { name: "理財", icon: ["fas", "dollar-sign"], routerName: "all" },
      { name: "食物", icon: ["fas", "hamburger"], routerName: "all" },
      { name: "西斯", icon: ["fas", "car"], routerName: "all" },
      { name: "疫情", icon: ["fas", "biohazard"], routerName: "all" },
      { name: "Apple", icon: ["fas", "apple-alt"], routerName: "all" },
      { name: "Podcast", icon: ["fas", "microphone"], routerName: "all" },
      { name: "居家生活", icon: ["fas", "home"], routerName: "all" },
      { name: "追星", icon: ["fas", "star"], routerName: "all" },
      { name: "閒聊", icon: ["fas", "comment"], routerName: "all" },
      { name: "有趣", icon: ["fas", "grin-alt"], routerName: "all" },
      { name: "感情", icon: ["fas", "heart"], routerName: "all" },
      { name: "廣告", icon: ["fas", "ad"], routerName: "all" },
      { name: "攝影", icon: ["fas", "camera"], routerName: "all" }
    ]
  }
};
