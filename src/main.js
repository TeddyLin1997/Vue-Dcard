import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App.vue";
import message from "@/components/message-box/message.js";
import { db } from "./config/db";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.config.productionTip = false;

Vue.prototype.$firebase = db;
Vue.prototype.$message = message;

Vue.component("awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
