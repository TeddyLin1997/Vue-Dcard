import Vue from "vue";
import router from "./router";
import store from "./store";
import { mapActions } from "vuex";

import App from "./views/App.vue";
import message from "@/components/message-box/message.js";
import loading from "@/components/loading/loading.js";
import { KANBAN_LIST, TAB_LIST } from "@/config/site";

import { database, auth } from "./config/firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.config.productionTip = false;

Vue.prototype.$message = message;
Vue.prototype.$database = database;
Vue.prototype.$auth = auth;

Vue.component("awesome-icon", FontAwesomeIcon);

Vue.directive("loading", loading);

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    this.getGlobalData();
    this.getUserInfo();
  },

  methods: {
    ...mapActions(["setUserInfo", "setKanbanList", "setTabList"]),

    getGlobalData() {
      this.setKanbanList(KANBAN_LIST.data);
      this.setTabList(TAB_LIST);
    },

    async getUserInfo() {
      const oldUserInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      if (oldUserInfo) {
        // 未先設定router 會找不到userInfo
        this.setUserInfo(oldUserInfo);

        const userInfo = await this.$database.getUser(oldUserInfo.uid);
        this.setUserInfo(userInfo);
      }
    }
  }
}).$mount("#app");
