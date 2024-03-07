<template>
  <div class="navigation-panel">
    <RouterLink :to="{ name: 'SETTINGS' }">
      <SimpleButton type="info">Настройки</SimpleButton>
    </RouterLink>
    <RouterLink :to="{ name: 'HOME' }">
      <SimpleButton type="warning">В центр</SimpleButton>
    </RouterLink>
    <RouterLink :to="{ name: 'HOME' }">
      <SimpleButton type="danger">Удалить</SimpleButton>
    </RouterLink>
    <RouterLink :to="{ name: 'CREATE_PERSON' }">
      <SimpleButton type="primary">Добавить</SimpleButton>
    </RouterLink>
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

<style scoped lang="less">
.navigation-panel {
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  padding: 10px;

  .simple-button {
    flex: 1;
    color: #000000c7;
    font-weight: 800;
  }

  a {
    flex: 1;
    display: flex;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
