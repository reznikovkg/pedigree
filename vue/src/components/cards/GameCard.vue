<template>
    <div class="game-card">
      <img v-if="game.cover" :src="'https:' + game.cover.url">
      <div v-else>Нет обложки</div>
      <div class="info">
        <h2>{{ game.name }}</h2>
        <h3 v-if="game.first_release_date">Год выпуска: {{ formatDate(game.first_release_date) }}</h3>
      </div>
    </div>
  </template>
      
  <script>
  
  export default {
    name: 'GameCard',
    props: {
      game: {
        type: Object,
      }
    },
    methods: {
      formatDate (date) {
        const newDate = new Date(date * 1000)
        return newDate.getFullYear()
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  .game-card {
    width: 25%;
    min-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #2C2B3C;
    border-radius: 24px;
    padding: 15px;
    & .info {
      text-align: center;
      & h2, h3 {
        color: white;
      }
    }
  }
  </style>
      