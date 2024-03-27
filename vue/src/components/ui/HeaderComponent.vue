<template>
  <section class="navbar">
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: $routes.HOME }">
      <SimpleButton class="navigation-panel__link" type="info">Главная</SimpleButton>
    </RouterLink>

    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: $routes.PERSON_LIST }">
      <SimpleButton class="navigation-panel__link" type="warning">Список</SimpleButton>
    </RouterLink>

    <div v-if="currentRole === 'admin'">
      <RouterLink class="navigation-panel__link__wrapper" :to="{ name: $routes.CREATE_PERSON }">
        <SimpleButton class="navigation-panel__link" type="primary">Добавить</SimpleButton>
      </RouterLink>
    </div>

    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: $routes.SETTINGS }">
      <SimpleButton class="navigation-panel__link" type="info">Настройки</SimpleButton>
    </RouterLink>

    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'FEEDBACK' }">
      <SimpleButton class="navigation-panel__link" type="info">Обратная связь</SimpleButton>
    </RouterLink>
  </section>
</template>

<script>
import SimpleButton from "./SimpleButton.vue"
import { mapGetters } from "vuex"

export default {
  name: 'HeaderComponent',
  components: {
    SimpleButton,
  },
  computed: {
    ...mapGetters('settings', [
      'getMode'
    ]),
    currentRole () {
      return this.getMode
    }
  }
}
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  gap: 10px;
  padding: 0 20px;
}

@media (max-width: 720px) {
  .navbar {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    padding: 15px;
  }
  
  .navigation-panel {
      &__link {
        width: 100%;

        &__wrapper {
          flex: 1;
        }
    }
  }
}
</style>
