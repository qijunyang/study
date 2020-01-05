export default {
  namespaced: true,
  state: {
    userList: [
      { firstName: "Jacky", lastName: "Wang" },
      { firstName: "Tom", lastName: "Kai" }
    ]
  },
  mutations: {
    appendUser(state, user) {
      state.userList.push(user);
    }
  },
  actions: {
    loadUserList({ commit, state }) {
      setTimeout(() => {
        state.userList = [];
      });
    }
  },
  getters: {
    numberOfUser(state) {
      return state.userList.length;
    }
  }
};
