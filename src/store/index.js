import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 嚴格模式
  strict: true,
  state: {
    userInfo: null
  },
  mutations: {
    SET_USER_INFO(state) {
      state.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    }
  },
  actions: {},
  modules: {}
});
