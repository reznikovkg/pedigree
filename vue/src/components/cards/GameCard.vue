<template>
  <div class="game-card">
    <img v-if="game.cover" :src="'https:' + game.cover.url">
    <div v-else>Нет обложки</div>
    <div class="info">
      <h3>{{ game.name }}</h3>
      <h3>Год выпуска: {{ formatReleaseDate(game.first_release_date) }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
  methods: {
    formatReleaseDate(timestamp) {
      if (timestamp) {
        const date = new Date(timestamp * 1000)
        return date.getFullYear()
      }
      return 'Неизвестно'
    },
  },
};
</script>

<style scoped lang="less">
.game-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: rgba(52, 73, 150, 0.8);
  border-radius: 10px;
  width:30%;
}
</style>
