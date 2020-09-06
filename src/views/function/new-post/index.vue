<template lang="pug">
  .new-post(v-loading="loading")
    .wrapper
      h1 發表文章
      .kanban
        div
          button(v-model="postForm.kanban" @click="selectPostInfo('kanban')") {{ postForm.kanbanName }}
        div(@click="handleRule()")
          awesome-icon(:icon="['fas', 'info-circle']") 
          span &nbsp 發文規則
      .user
        button(v-model="postForm.name" @click="selectPostInfo('user')") {{ postForm.name }}
      .title
        input(v-model="postForm.title" placeholder="標題")
      .content
        textarea(v-model="postForm.content" type="textarea" placeholder="內文")
      .button
        button(@click="cancel()") 取消
        button(:class="{ 'disable': disable }" @click="postNewArticle()") 發表
    
    //- 選擇狀態按鈕
    dialog-page(:visible.sync="isOpenDialog" radius width="500px")
      .select
        h1 請選擇
        .list
          article(v-for="kanban of selectList[activeSelect]" :key="kanban.name" @click="handleSelect(kanban)")
            .icon
              circle-icon(:icon="kanban.icon" :icon-size="18" :color="kanban.fontColor" :background-color="kanban.color")
            .text
              span {{ kanban.name }}
    
    //- 發文規則
    dialog-page(:visible.sync="isOpenRule" radius width="600px")
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
import circleIcon from "@/components/circle-icon";
import { getNowDateTime } from "@/helper";
import { mapState } from "vuex";

export default {
  name: "new-post",

  components: {
    dialogPage,
    circleIcon
  },

  data() {
    return {
      postForm: {
        kanbanName: "點此選擇發文看板",
        kanbanCode: "",
        name: "請選擇發文身份",
        title: "",
        content: ""
      },
      activeSelect: "kanban",
      isOpenDialog: false,
      isOpenRule: false,
      loading: false
    };
  },

  computed: {
    ...mapState(["kanbanList", "userInfo"]),

    disable() {
      if (this.postForm.kanbanName === "點此選擇發文看板") return true;
      if (this.postForm.kanbanCode === "") return true;
      if (this.postForm.name === "請選擇發文身份") return true;
      if (this.postForm.title === "") return true;
      if (this.postForm.content === "") return true;
      return false;
    },

    isVisible() {
      return {
        kanban: this.activeSelect === "kanban",
        user: this.activeSelect === "user"
      };
    },

    selectList() {
      return {
        kanban: [...this.kanbanList],
        user: [
          { name: "匿名", icon: ["fas", "users-slash"], fontColor: "#cb1818" },
          {
            name: this.userInfo.school,
            icon: ["fas", "graduation-cap"],
            fontColor: "#f3ae00"
          },
          {
            name: `${this.userInfo.school}  ${this.userInfo.name}`,
            icon: ["fas", "house-user"],
            fontColor: "#006AA6"
          },
          {
            name: this.userInfo.name,
            icon: ["fas", "user-circle"],
            fontColor: "#08aa18"
          }
        ]
      };
    }
  },

  methods: {
    // 選擇發文資訊
    selectPostInfo(value) {
      this.isOpenDialog = true;
      this.activeSelect = value;
    },

    // dialog選擇版
    handleSelect(item) {
      if (this.isVisible.user) this.postForm.name = item.name;
      if (this.isVisible.kanban) {
        this.postForm.kanbanName = item.name;
        this.postForm.kanbanCode = item.code;
      }

      this.isOpenDialog = false;
    },

    handleRule() {
      this.isOpenRule = !this.isOpenRule;
    },

    cancel() {
      this.$router.go(-1);
    },

    async postNewArticle() {
      this.loading = true;

      if (this.disable) return;

      const path = `data/${this.postForm.kanbanCode}`;
      const value = {
        name: this.postForm.name,
        time: getNowDateTime(),
        kanban: this.postForm.kanbanName,
        title: this.postForm.title,
        content: this.postForm.content,
        img: "picture",
        mood: 0,
        react: 0,
        reaction: []
      };

      const homeValue = {
        ...value,
        kanban: "home"
      };

      const result = await Promise.all([
        this.$database.setArticle("data/home", homeValue),
        this.$database.setArticle(path, value)
      ]);

      if (result.every(item => item.status === true)) {
        this.$message("發表成功");
        this.$router.push({
          name: "kanban",
          params: { kanban: this.postForm.kanbanCode, id: result.id }
        });
      } else this.$message("發表失敗", "error");

      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
