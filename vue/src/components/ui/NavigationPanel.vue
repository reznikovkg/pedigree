<template>
  <div class="navigation-panel">
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'SETTINGS' }">
      <SimpleButton class="navigation-panel__link" type="info">Настройки</SimpleButton>
    </RouterLink>
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'HOME' }">
      <SimpleButton class="navigation-panel__link" type="warning">В центр</SimpleButton>
    </RouterLink>
    <RouterLink class="navigation-panel__link__wrapper" :to="{ name: 'PERSON_PAGE', params: {id: this.id}}">
      <SimpleButton class="navigation-panel__link" type="danger" @click="() => deletePersonInButton()">Удалить</SimpleButton>
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
import { mapActions } from "vuex";

export default {
  components: {
    SimpleButton,
  },
  computed: {
    isUserPage() {
      return this.$route.name === 'PersonPage';
    },
     id () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('persons', [
      'deletePerson'
    ]),
    deletePersonInButton() {
      this.$confirm('Действительно хотите удалить профиль? Это действие невозможно будет отменить', 'Удаление', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
        type: 'warning'
      }).then(() => {
        this.deletePerson(this.id)
        this.$message({
          type: 'success',
          message: 'Удаление выполнено'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Удаление отменено'
        });          
      });
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
