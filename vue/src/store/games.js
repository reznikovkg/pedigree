import axios from 'axios';

export default {
  state: {
    token: '',
    games: []
  },
  getters: {
    games: state => state.games
  },
  mutations: {
    SET_TOKEN: (state, token) => (state.token = token),
    SET_GAMES: (state, games) => (state.games = games),
    SET_GAME: (state, game) => (state.games = game)
  },
  actions: {
    async saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    async searchGamesByName({ commit, state }, name) {
      try {
        const response = await axios.get(
          'http://localhost:3000/games',
          {
            params: {
              search: name,
              fields: 'name,cover.url,first_release_date',
              limit: 100
            },
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          }
        )
        commit('SET_GAMES', response.data)
      } catch (error) {
        console.error('Error searching games by name:', error)
      }
    },
    async getGameById({ commit, state }, id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/games/${id}`,
          {
            params: {
              fields: 'name,cover.url,first_release_date',
            },
            headers: {
              Authorization: `Bearer ${state.token}`
            },
          }
        )
        commit('SET_GAME', response.data)
      } catch (error) {
        console.error('Error getting game by ID:', error)
      }
    }
  }
}
