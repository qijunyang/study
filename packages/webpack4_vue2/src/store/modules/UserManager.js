import {
  APPEND_USER_MUTATION,
  RESET_USER_MUTATION,
  SET_IS_LOADING_MUTATION
} from "../mutation-types";

export default {
  namespaced: true,
  state: {
    userList: [],
    isLoading: true
  },
  mutations: {
    [APPEND_USER_MUTATION](state, user) {
      state.userList.push(user);
    },
    [RESET_USER_MUTATION](state, newUserList) {
      state.userList = newUserList;
    },
    [SET_IS_LOADING_MUTATION](state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    loadUserList({ commit, state }) {
      commit(SET_IS_LOADING_MUTATION, true);
      setTimeout(() => {
        commit(RESET_USER_MUTATION, [
          { firstName: "Jacky", lastName: "Wang" },
          { firstName: "Tom", lastName: "Kai" }
        ]);
        commit(SET_IS_LOADING_MUTATION, false);
      }, 2000);
    }
  },
  getters: {
    numberOfUser(state) {
      return state.userList.length;
    }
  }
};
