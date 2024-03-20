import axios from 'axios';

export const GAMES = "games"

export default {
  namespaced: true,
  state: {
    games: [],
    token: undefined
  },
  getters: {
    getToken: (state) => state.token,
    getGames: (state) => state.games
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
    },
    searchingGamesRes: (state, payload) => (state.games = payload)
  },
  actions: {
    saveToken: ({ commit }) => {
      axios.post('https://id.twitch.tv/oauth2/token?client_id=whufib38vwkfml7q55c8fh3cyo4gac&client_secret=t33kxj0zkmhv3mncm4a0xxvpjtsjoe&grant_type=client_credentials')
        .then(res => {
          commit("setToken", res.data.access_token)
        })
        .catch(error => {
          console.error("Error while fetching token:", error);
        });
    },
    searchGamesByName: async({ commit, state }, name) => {
      try {
        const res = await axios.get(
          'http://localhost:5000/games',
          {
            params: {
              search: name,
              fields: 'name, cover.url, first_release_date',
              limit: 100
            },
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          }
        )
        commit('searchingGamesRes', res.data)
      } catch (error) {
        console.error('Error searching games by name:', error)
      }
    },
    async searchGameById({ commit, state }, id) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/games/${id}`,
          {
            params: {
              fields: 'name, cover.url, first_release_date',
            },
            headers: {
              Authorization: `Bearer ${state.token}`
            },
          }
        )
        commit('searchingGamesRes', response.data)
      } catch (error) {
        console.error('Error getting game by ID:', error)
      }
    }
  }
}