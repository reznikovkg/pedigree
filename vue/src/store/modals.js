import { genHash } from "../store/services/common.js"

export default {
  namespaced: true,
  state: {
    modals: {}
  },
  getters: {
    getModals: (state) => state.modals
  },
  mutations: {
    removeModal: (state, hash) => {
      delete state.modals[hash]
      state.modals = { ...state.modals }
    },
    openModal: (state, { component, params }) => {
      const hash = genHash()
      state.modals[hash] = {
        component,
        hash,
        params
      }
      state.modals = { ...state.modals }
    }
  }
}
