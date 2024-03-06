export default{
  namespaced: true,
  state: {
    mode: 'user', // admin/user
    access: false // true/false
  },

  getters: {
    getMode: (state) => state.mode,
    getAccess: (state) => state.access
  },

  mutations: {
    setMode: (state, payload) => {
      state.mode = payload
    },
    setAccess: (state, payload) => {
      state.access = payload
    }
  },

  actions: {
    // Initialize state from localStorage
    initializeSettings: ({ commit }) => {
      const storedAccess = localStorage.getItem('access');
      if (storedAccess !== null) {
        commit('setAccess', JSON.parse(storedAccess));
      }
    },
    setAccess: ({ commit }, payload) => {
      commit('setAccess', payload);
      // Сохраняем значение в localStorage
      localStorage.setItem('access', JSON.stringify(payload));
    },
  },
  
}
