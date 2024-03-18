<template>
  <div class="game-card">
    <img v-if="game.cover" :src="'https:' + game.cover.url">
    <div v-else class="no-cover">Нет обложки</div>
    <div class="info">
      <h3>{{ game.name }}</h3>
      <p>Год выпуска: {{ formatReleaseDate(game.first_release_date) }}</p>
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
        const date = new Date(timestamp * 1000);
        return date.getFullYear();
      }
      return 'Неизвестно';
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
}

.game-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}


.game-card .info {
  flex-grow: 1;
}
</style>