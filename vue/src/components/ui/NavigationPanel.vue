<template>
  <div class="navigation-panel">
    <SimpleButton type="info">Настройки</SimpleButton>
    <SimpleButton type="warning">В центр</SimpleButton>
    <SimpleButton type="danger">Удалить</SimpleButton>
    <SimpleButton type="primary">Добавить</SimpleButton>
  </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue";

export default {
  components: {
    SimpleButton,
  },
};
</script>

<style scoped>
.navigation-panel {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.navigation-panel .simple-button {
  flex: 1;
  width: 150px;
  margin-right: 10px;
}

.navigation-panel .simple-button:last-child {
  margin-right: 0;
}
</style>
