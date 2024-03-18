<template>
  <div>
    <h1 class="main-text">Игры</h1>
    <div class="select-panel">
      <label for="tokenInput" class="select-panel__title">API Токен:</label>
      <input
        type="text"
        id="tokenInput"
        v-model="token"
        class="select-panel__input"
      >
      <button @click="() => saveToken()" class="select-panel__btn">Сохранить Токен</button>
      <label for="nameInput" class="select-panel__title">Искать по имени:</label>
      <input
        type="text"
        id="nameInput"
        v-model="name"
        class="select-panel__input"
      >
      <button @click="() => searchGamesByName(name)" class="select-panel__btn">Найти</button>
      <label for="idInput" class="select-panel__title">Искать по ID:</label>
      <input
        type="number"
        id="idInput"
        v-model.number="id"
        class="select-panel__input"
      >
      <button @click="() => getGameById(id)" class="select-panel__btn">Найти</button>
    </div>
    <div class="searched-panel">
      <div v-if="games.length">
        <h2 class="searched-panel__title">Найденные игры:</h2>
        <div
          v-for="game in games"
          :key="game.id"
          class="card_game"
        >
          <GameCard :game="game"></GameCard>
        </div>
      </div>
      <div v-else>
        <p>Ни одной игры не найдено</p>
      </div>
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
    }
  },
  computed: {
    ...mapGetters(['games']),
  },
  methods: {
    ...mapActions(['saveToken', 'searchGamesByName', 'getGameById']),
    async saveToken() {
      try {
        await this.$store.dispatch('saveToken', this.token)
      } catch (error) {
        console.error('Error saving token:', error)
      }
    }
  }
}
</script>

<style scoped lang="less">
.main-text{
  font-size: 42px;
  font-weight: 900;
  margin: 10px;
}
.select-panel{
  display: flex;
  flex-direction: column;
  width: 20%;
  margin:10px;

  &__title{
    font-size: 20px;
    font-weight: 600;
  }

  &__input{
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  &__btn{
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 16px;
    background-color: rgb(52, 73, 150);
    color: white;
    cursor: pointer;
  }
}

.searched-panel{
  margin:10px;

  &__title{
    font-size: 26px;
  }
}
</style>
