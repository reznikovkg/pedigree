export default{
  namespaced: true,
  state: {
    mode: 'user', // admin/user
    access: localStorage.getItem('access') !== null ? JSON.parse(localStorage.getItem('access')) : false,
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
    initializeSettings: ({ commit }) => {
      const storedAccess = localStorage.getItem('access');
      if (storedAccess !== null) {
        commit('setAccess', JSON.parse(storedAccess));
      }
    },
    setAccess: ({ commit }, payload) => {
      commit('setAccess', payload);
      localStorage.setItem('access', JSON.stringify(payload));
    },
    setMode: (store, payload) => new Promise((resolve) => {
      store.commit('setMode', payload)
      return resolve()
    }),
  },
  
}
