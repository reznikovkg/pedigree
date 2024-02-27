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
    },
    deleteMode: (state) => {
      state.mode = 'user'
    },
    deleteAccess: (state) => {
      state.access = false
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
    }),
    deleteMode: (store) => new Promise((resolve) => {
      store.commit('deleteMode')
      return resolve()
    }),
    deleteAccess: (store) => new Promise((resolve) => {
      store.commit('deleteAccess')
      return resolve()
    })
  }
}
