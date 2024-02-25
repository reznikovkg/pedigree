<template>
  <PageLayout>
    <h1>{{ person.fullName }}</h1>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout.vue';

export default {
  name: 'PersonPage',
  components: {
    PageLayout
  },
  computed: {
    person () {
      // Здесь нужно получить объект человека по id из параметра страницы
      return {
        fullName: "Фамилия Имя Отчество" // Замените данными из объекта человека
      }
    },
    id () {
      return this.$route.params.id
    }
  }
};
</script>
