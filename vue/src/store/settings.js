// Выносим функцию для получения значения 'access' в отдельное определение
function getStoredAccess() {
  const access = localStorage.getItem('access')
  return access !== null ? JSON.parse(access) : false;
}

export default {
  namespaced: true,
  state: {
    mode: 'user', // admin/user
    access: getStoredAccess(),
  },

  getters: {
    getMode: (state) => state.mode,
    getAccess: (state) => state.access
  },

  mutations: {
    setMode: (state, payload) => {
      state.mode = payload;
    },
    setAccess: (state, payload) => {
      state.access = payload;
      localStorage.setItem('access', JSON.stringify(payload));
    },
  },

  actions: {
    setAccess: ({ commit }, payload) => new Promise((resolve) => {
      commit('setAccess', payload);
      resolve();
    }),
    setMode: ({ commit }, payload) => new Promise((resolve) => {
      commit('setMode', payload);
      resolve();
    }),
  },
}
