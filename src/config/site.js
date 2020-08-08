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
      { name: "穿搭", icon: ["fas", "tshirt"], code: "all" },
      { name: "程式語言", icon: ["fas", "bug"], code: "all" },
      { name: "成長", icon: ["fas", "shoe-prints"], code: "all" },
      { name: "運動", icon: ["fas", "running"], code: "all" },
      { name: "理財", icon: ["fas", "dollar-sign"], code: "all" },
      { name: "食物", icon: ["fas", "hamburger"], code: "all" },
      { name: "西斯", icon: ["fas", "car"], code: "all" },
      { name: "疫情", icon: ["fas", "biohazard"], code: "all" },
      { name: "Apple", icon: ["fas", "apple-alt"], code: "all" },
      { name: "Podcast", icon: ["fas", "microphone"], code: "all" },
      { name: "居家生活", icon: ["fas", "home"], code: "all" },
      { name: "追星", icon: ["fas", "star"], code: "all" },
      { name: "閒聊", icon: ["fas", "comment"], code: "all" },
      { name: "有趣", icon: ["fas", "grin-alt"], code: "all" },
      { name: "感情", icon: ["fas", "heart"], code: "all" },
      { name: "廣告", icon: ["fas", "ad"], code: "all" },
      { name: "攝影", icon: ["fas", "camera"], code: "all" }
    ]
  }
};
