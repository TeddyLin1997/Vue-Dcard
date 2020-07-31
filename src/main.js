import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./views/App.vue";
import { db } from "./db";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

Vue.prototype.$firebase = db;

Vue.config.productionTip = false;

library.add(fas);

Vue.component("awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
