import axios from 'axios';

export default {
  state: {
    token: '',
    games: []
  },
  getters: {
    token: state => state.token,
    games: state => state.games,
  },
  actions: {
    async saveToken({ commit }, token) {
      try {
        commit('setToken', token)
      } catch (error) {
        console.error('Error saving token:', error)
      }
    },
    async searchGamesByName({ commit, rootState }, name) {
      try {
        const token = rootState.games.token
        const response = await axios.get('/api/games', {
          params: {
            search: name,
            fields: 'name, first_release_date, cover.url',
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        commit('setGames', response.data)
      } catch (error) {
        console.error('Error searching games by name:', error)
      }
    },
    async getGameById({ commit, rootState }, id) {
      try {
        const token = rootState.games.token
        const response = await axios.get(`http://localhost:3000/api/games/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        })
        commit('setGames', response.data)
      } catch (error) {
        console.error('Error getting game by ID:', error)
      }
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setGames(state, games) {
      state.games = games
    }
  }
}
