<template>
  <div>
    <div class="select-panel">
      <h1>Games Page</h1>
      <label for="tokenInput">API Token:</label>
      <input type="text" id="tokenInput" v-model="token">
      <button @click="() => saveToken()">Save Token</button>

      <label for="nameInput">Search by Name:</label>
      <input type="text" id="nameInput" v-model="name">
      <button @click="() => searchGamesByName(name)">Search</button>

      <label for="idInput">Search by ID:</label>
      <input type="number" id="idInput" v-model.number="id">
      <button @click="() => getGameById(id)">Search</button>
    </div>

    <div v-if="games.length">
      <h2>Search Results:</h2>
      <div v-for="game in games" :key="game.id">
        <GameCard :game="game"></GameCard>
      </div>
    </div>
    <div v-else>
      <p>No games found.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameCard from '@/components/cards/GameCard.vue';

export default {
  components: {
    GameCard
  },
  data() {
    return {
      token: '',
      name: '',
      id: null
    };
  },
  computed: {
    ...mapGetters(['games']),
  },
  methods: {
    ...mapActions(['saveToken', 'searchGamesByName', 'getGameById']),

    async saveToken() {
      try {
        await this.$store.dispatch('saveToken', this.token);
      } catch (error) {
        console.error('Error saving token:', error);
      }
    }
  }
}
</script>

<style scoped lang="less">
.select-panel{
  display: flex;
  flex-direction: column;
  width: 20%;
  margin:10px;
}
</style>
