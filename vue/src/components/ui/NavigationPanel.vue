<template>
  <div class="navigation-panel">
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'SETTINGS' }">
      <SimpleButton class="navigation-panel__link" type="info">Настройки</SimpleButton>
    </RouterLink>
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'HOME' }">
      <SimpleButton class="navigation-panel__link" type="warning">В центр</SimpleButton>
    </RouterLink>
    <RouterLink v-if="isUserPage" class="navigation-panel__link__wrapper" :to="{ name: 'HOME' }">
      <SimpleButton class="navigation-panel__link" type="danger">Удалить</SimpleButton>
    </RouterLink>
    <RouterLink v-if="isUserPage" class="navigation-panel__link__wrapper"
      :to="{ name: 'EDIT_PERSON', params: { id: $route.params.id } }">
      <SimpleButton class="navigation-panel__link" type="warning">Редактировать</SimpleButton>
    </RouterLink>
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'CREATE_PERSON' }">
      <SimpleButton class="navigation-panel__link" type="primary">Добавить</SimpleButton>
    </RouterLink>
  </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue";

export default {
  components: {
    SimpleButton,
  },
  computed: {
    isUserPage() {
      return this.$route.name === 'PERSON';
    }
  }
};
</script>

<style scoped lang="less">
.navigation-panel {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;

  &__link {
    width: 100%;

    &__wrapper {
      flex: 1;
    }
  }
}
</style>
