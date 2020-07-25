<template lang="pug">
  .aside-menu
    kanban(:kanbanData="defalutKanban")
    kanban(:kanbanData="followsKanban")
    kanban(:kanbanData="featuredKanban")
</template>

<script>
import kanban from "@/components/kanban";

export default {
  name: "aside-menu",

  components: {
    kanban
  },

  data() {
    return {
      // 預設看板
      defalutKanban: {
        title: "",
        data: [
          { name: "所有看板", icon: ["fas", "list"] },
          { name: "即時熱門看板", icon: ["fas", "fire"] },
          { name: "好物研究室", icon: ["fas", "store-alt"] },
          { name: "遊戲專區", icon: ["fas", "gamepad"] },
          { name: "社會新鮮人熱門看版", icon: ["fas", "briefcase"] }
        ]
      },

      // 追蹤看版
      followsKanban: {
        title: "追蹤的看版",
        data: [{ name: "麻省理工學院", icon: ["fas", "graduation-cap"] }]
      },

      // 精選看板
      featuredKanban: {
        title: "Dacrd 精選看板",
        data: [
          { name: "穿搭", icon: ["fas", "tshirt"] },
          { name: "程式語言", icon: ["fas", "bug"] },
          { name: "成長", icon: ["fas", "shoe-prints"] },
          { name: "運動", icon: ["fas", "running"] },
          { name: "理財", icon: ["fas", "dollar-sign"] },
          { name: "食物", icon: ["fas", "hamburger"] },
          { name: "西斯", icon: ["fas", "car"] },
          { name: "疫情", icon: ["fas", "biohazard"] },
          { name: "Apple", icon: ["fas", "apple-alt"] },
          { name: "Podcast", icon: ["fas", "microphone"] },
          { name: "居家生活", icon: ["fas", "home"] },
          { name: "追星", icon: ["fas", "star"] },
          { name: "閒聊", icon: ["fas", "comment"] },
          { name: "有趣", icon: ["fas", "grin-alt"] },
          { name: "感情", icon: ["fas", "heart"] },
          { name: "廣告", icon: ["fas", "ad"] },
          { name: "攝影", icon: ["fas", "camera"] }
        ]
      }
    };
  }
};
</script>

<style></style>
