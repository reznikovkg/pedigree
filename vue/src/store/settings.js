function getStoredAccess() {
  const access = localStorage.getItem('access')
  return access !== null ? JSON.parse(access) : false
}
function getStoredMode() {
  const mode = localStorage.getItem('mode')
  return mode !== null ? JSON.parse(mode) : null
}

function getStoredToken() {
  const token = localStorage.getItem('token')
  return token !== null ? JSON.parse(token) : '';
}

export default {
  namespaced: true,
  state: {
    mode: getStoredMode(), // admin/user
    access: getStoredAccess(),
    token: getStoredToken(),
  },

  getters: {
    getMode: (state) => state.mode,
    getAccess: (state) => state.access,
    getToken: (state) => state.token
  },

  mutations: {
    setMode: (state, payload) => {
      state.mode = payload
      localStorage.setItem('mode', JSON.stringify(payload))
    },
    setAccess: (state, payload) => {
      state.access = payload
      localStorage.setItem('access', JSON.stringify(payload))
    },
    setToken: (state, payload) => {
      state.token = payload;
      localStorage.setItem('token', JSON.stringify(payload));
    }
  },

  actions: {
    setAccess: ({ commit }, payload) => new Promise((resolve) => {
      commit('setAccess', payload)
      return resolve()
    }),
    setToken: ({ commit }, payload) => new Promise((resolve) => {
      commit('setToken', payload);
      return resolve();
    }),
    setMode: (store, payload) => new Promise((resolve) => {
      store.commit('setMode', payload)
      return resolve()
    }),
  },
}
