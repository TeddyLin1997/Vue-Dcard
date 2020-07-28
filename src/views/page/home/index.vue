<template lang="pug">
  .home
    kanban-container
      template(#header)
        header.header
          kanban-title(:label="'首頁'" :icon="['fas', 'home']")
          kanban-tabs(:data="tabList")
      template(#article)
        article
          article-item(:data="data")
      template(#footer)
        footer
</template>

<script>
import kanbanContainer from "@/components/kanban-container";
import kanbanTitle from "@/components/kanban-title";
import kanbanTabs from "@/components/kanban-tabs";
import articleItem from "@/components/article-item";

export default {
  name: "home",

  components: {
    kanbanContainer,
    kanbanTabs,
    kanbanTitle,
    articleItem
  },

  data() {
    return {
      tabList: [
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
      ],
      data: [
        {
          id: 0,
          user: "彭于晏",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 1,
          user: "金城武",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 2,
          user: "CHRIS",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 3,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 4,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 5,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 6,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 7,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 8,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        },
        {
          id: 9,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "Side Project趕快寫完啊",
          content:
            "國際熱錢湧進台股，其中在金融股方面，包括元大金、玉山金、中信金等金控業獲利表現亮眼",
          mood: 12235,
          react: 476
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
