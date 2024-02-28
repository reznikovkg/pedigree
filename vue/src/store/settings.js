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
    setMode: (store, payload) => new Promise((resolve) => {          
      store.commit('setMode', payload)
      return resolve()
    }),
    setAccess: (store, payload) => new Promise((resolve) => {
      store.commit('setAccess', payload)
      return resolve()
    })
  }
}
