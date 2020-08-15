import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 嚴格模式
  strict: true,

  state: {
    userInfo: null,
    tabList: [],
    kanbanList: []
  },

  getters: {
    kanbanObject(state) {
      return name => {
        const result = {};
        state.kanbanList.forEach(kanban => (result[kanban.code] = kanban));
        return result[name];
      };
    }
  },

  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
      window.localStorage.setItem("userInfo", JSON.stringify(payload));
    },

    SET_TAB_LIST(state, payload) {
      state.tabList = payload;
    },

    SET_KANBAN_LIST(state, payload) {
      state.kanbanList = payload;
    }
  },

  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("SET_USER_INFO", userInfo);
    },

    setTabList({ commit }, kanbanList) {
      commit("SET_TAB_LIST", kanbanList);
    },

    setKanbanList({ commit }, kanbanList) {
      commit("SET_KANBAN_LIST", kanbanList);
    }
  }
});
