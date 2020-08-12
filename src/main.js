import Vue from "vue";
import router from "./router";
import store from "./store";
import { mapActions } from "vuex";
import App from "./views/App.vue";
import message from "@/components/message-box/message.js";
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

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    const userinfo = JSON.parse(window.localStorage.getItem("userInfo"));
    if (userinfo) this.setUserInfo(userinfo);
  },

  methods: {
    ...mapActions(["setUserInfo"])
  }
}).$mount("#app");
