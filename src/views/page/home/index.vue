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
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 1,
          user: "金城武",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 2,
          user: "CHRIS",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 3,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 4,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 5,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 6,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 7,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 8,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
          mood: 12235,
          react: 476
        },
        {
          id: 9,
          user: "chris",
          postTime: "2020/07/28 18:45",
          title: "當不成頭獎得主，你可以選對投資目標",
          content:
            "「千金難買早知道，後悔沒有特效藥」，多少遺憾正是敗在「不知道」，即便遇上泰山，也需要有夠犀利的慧眼才能辨識出來。這讓我想起幾個在集團內，至今仍為大家所津津樂道的事蹟",
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
