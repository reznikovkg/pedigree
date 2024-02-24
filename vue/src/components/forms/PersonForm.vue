<template>
  <div class="person-page">
    <div class="person-page__person-form">
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.secondName"
          class="person-page__inp-grid"
          type="text"
          placeholder="Фамилия"
        >
      </div>
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.firstName"
          class="person-page__inp-grid"
          type="text"
          placeholder="Имя"
        >
      </div>
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.patronymic"
          class="person-page__inp-grid"
          type="text"
          placeholder="Отчество"
        >
      </div>
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.gender"
          class="person-page__inp-grid"
          type="text"
          placeholder="Пол"
        >
      </div>
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.birth_date"
          class="person-page__inp-grid"
          type="text"
          placeholder="Дата рождения"
        >
      </div>
      <div class="person-page__form-group-grid">
        <input
          v-model="formData.die_date"
          class="person-page__inp-grid"
          type="text"
          placeholder="Дата смерти"
        >
      </div>
    </div>
    <div class="person-page__form-group-bottom">
      <textarea
        v-model="formData.activity"
        class="person-page__inp-bottom"
        type="text"
        placeholder="Род деятельности"
      >
      </textarea>
    </div>
    <div class="person-page__form-group-bottom">
      <textarea
        v-model="formData.biography"
        class="person-page__inp-bottom"
        type="text"
        placeholder="Биография"
      >
      </textarea>
    </div>
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

  &__person-form {
    max-width: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  &__form-group-grid {
    height: 35px;
    margin-top: 6px;
    margin-left: 8px;
  }

  &__inp-grid {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
    height: 50%;
    font-weight: bold;
    width: 163px;
  }

  &__form-group-bottom {
    width: 365px;
    height: 70px;
    margin-top: 6px;
    margin-left: 8px;
  }

  &__inp-bottom {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
    height: 50px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: aqua;
    color: black;
    font-weight: bold;
    cursor: pointer;
    margin-left: 280px;
    margin-bottom: 20px;
  }
}
</style>
