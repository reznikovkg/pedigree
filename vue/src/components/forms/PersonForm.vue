<template>
  <div class="person-page">
    <div class="person-page__form">
      <input
        v-model="formData.secondName"
        class="person-page__input"
        type="text"
        placeholder="Фамилия"
      >
      <input
        v-model="formData.firstName"
        class="person-page__input"
        type="text"
        placeholder="Имя"
      >
      <input
        v-model="formData.patronymic"
        class="person-page__input"
        type="text"
        placeholder="Отчество"
      >
      <input
        v-model="formData.gender"
        class="person-page__input"
        type="text"
        placeholder="Пол"
      >
      <input
        v-model="formData.birth_date"
        class="person-page__input"
        type="text"
        placeholder="Дата рождения"
      >
      <input
        v-model="formData.die_date"
        class="person-page__input"
        type="text"
        placeholder="Дата смерти"
      >
    </div>
    <textarea
      v-model="formData.activity"
      class="person-page__input-bottom"
      type="text"
      placeholder="Род деятельности"
    >
    </textarea>
    <textarea
      v-model="formData.biography"
      class="person-page__input-bottom"
      type="text"
      placeholder="Биография"
    >
    </textarea>
    <button @click="() => submitForm()" class="person-page__btn">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'PersonForm',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {
        secondName: '',
        firstName: '',
        patronymic: '',
        gender: '',
        birth_date: '',
        die_date: '',
        activity: '',
        biography: ''
      }
    }
  },
  mounted () {
    this.formData = { ...this.person }
  },
  methods: {
    submitForm () {
      console.log(this.formData)
    }
  }
}
</script>

<style scoped lang="less">
.person-page {
  background-color: white;
  max-width: 400px;

  &__form {
    max-width: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 17px;
    padding: 10px;
  }

  &__input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
    font-weight: 600;
    width: 160px;
  }

  &__input-bottom {
    width: 90%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
    margin: 10px;
    font-weight: 600;
  }

  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: aqua;
    color: black;
    font-weight: 600;
    cursor: pointer;
    margin-left: 280px;
    margin-bottom: 20px;
  }
}
</style>
