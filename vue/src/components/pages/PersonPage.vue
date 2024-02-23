<template>
  <div>
    <h1>{{ person.fullName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PersonPage',
  computed: {
    person() {
      // Здесь нужно получить объект человека по id из параметра страницы
      return {
        fullName: "Фамилия Имя Отчество" // Замените данными из объекта человека
      };
    },
    id() {
      return this.$route.params.id;
    }
  }
};
</script>