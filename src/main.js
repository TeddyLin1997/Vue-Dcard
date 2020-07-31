import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App.vue";
import { db } from "./config/db";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.config.productionTip = false;

Vue.prototype.$firebase = db;

Vue.component("awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
