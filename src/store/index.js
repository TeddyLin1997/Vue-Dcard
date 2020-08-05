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
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
      window.localStorage.setItem("userInfo", JSON.stringify(payload));
    }
  },

  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("SET_USER_INFO", userInfo);
    }
  }
});
