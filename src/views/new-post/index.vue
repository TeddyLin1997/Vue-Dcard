<template lang="pug">
  .new-post
    .wrapper
      h1 發表文章
      .kanban
        div
          button(v-model="postForm.kanban" @click="selectPostInfo('kanban')") {{ postForm.kanbanName }}
        div(@click="handleRule()")
          awesome-icon(:icon="['fas', 'info-circle']") 
          span &nbsp 發文規則
      .user
        button(v-model="postForm.nickName" @click="selectPostInfo('user')") {{ postForm.nickName }}
      .title
        input(v-model="postForm.title" placeholder="標題")
      .content
        textarea(v-model="postForm.content" type="textarea" placeholder="內文")
      .button
        button 取消
        button 下一步
    
    //- 選擇狀態按鈕
    dialog-page(:visible.sync="isOpenDialog")
      .select
        h1 請選擇
        .list
          div(v-for="item of selectList[activeSelect]" :key="item.name" @click="handleSelect(item)")
            awesome-icon(:icon="item.icon")
            span {{ item.name }}
    
    //- 發文規則
    dialog-page(:visible.sync="isOpenRule" width="600px")
      .rule
        h1 與狄卡的發文留言小約定
        p 一、禁止使用不雅字眼、中傷、歧視、挑釁或謾罵他人。
        p 二、為了創造更佳的內容體驗，Dcard 全面禁止在文章與留言內留下個人聯絡方式或 ID。
        p 三、請勿短時間內張貼大量重複內容。
        p 四、除廢文板以外，文章內文字數需多於 15 個繁體中文字。
        p 五、若文章中有部分內容與事實不符，請適度在標題或內文、留言中標示。未標示並經他人檢舉提出明確證據，且態度不佳者，將斟酌處分，情節嚴重可能永久停權。
        p 六、若舉辦活動如板聚、明信片交換等，需要使用表單，需徵求到 20 人以上留言「+1」表示願意參加後，方可提供表單連結做報名使用。
        p 七、請善用「加入話題」為文章分類，讓更多人與你產生共鳴！更多話題的使用方式請點我。
        br
        p 其餘規定請參閱板規，若有疑問請私訊粉專。
        .know
          button(@click="handleRule()") 我知道了
      
          
</template>

<script>
import dialogPage from "@/components/dialog-page";
import { KANBAN_LIST } from "@/config/site";
import { deepCopy } from "@/helper";

export default {
  name: "new-post",

  components: {
    dialogPage
  },

  data() {
    return {
      kanbanList: KANBAN_LIST.featured,
      userList: [
        { name: "匿名", icon: ["fas", "users-slash"] },
        { name: "學校名稱", icon: ["fas", "graduation-cap"] },
        { name: "學校名稱 + ID", icon: ["fas", "house-user"] },
        { name: "ID", icon: ["fas", "user-circle"] }
      ],
      postForm: {
        kanbanName: "點此選擇發文看板",
        kanbanCode: "",
        nickName: "請選擇發文身份",
        title: "",
        content: ""
      },
      activeSelect: "kanban",
      isOpenDialog: false,
      isOpenRule: true
    };
  },

  computed: {
    isVisible() {
      return {
        kanban: this.activeSelect === "kanban",
        user: this.activeSelect === "user"
      };
    },

    selectList() {
      return {
        kanban: deepCopy(this.kanbanList.data),
        user: this.userList
      };
    }
  },

  methods: {
    selectPostInfo(value) {
      this.isOpenDialog = true;
      this.activeSelect = value;
    },

    handleSelect(item) {
      if (this.isVisible.user) this.postForm.nickName = item.name;
      if (this.isVisible.kanban) {
        this.postForm.kanbanName = item.name;
        this.postForm.kanbanCode = item.code;
      }

      this.isOpenDialog = false;
    },

    handleRule() {
      this.isOpenRule = !this.isOpenRule;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
