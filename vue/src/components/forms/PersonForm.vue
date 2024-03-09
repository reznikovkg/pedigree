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

    <div v-for="(military, index) in formData.military" :key="index">
      <MilitaryForm
        :value="military"
        v-model="formData.military[index]"
        @change="(military) => setForm(military, index)"
      />
      <button @click="() => removeForm(index)">Удалить</button>
    </div>

    <button @click="() => addForm()"  class="person-page__btn">Добавить</button>


    <button @click="() => submitForm()" class="person-page__btn">Сохранить</button>
  </div>
</template>

<script>
import MilitaryForm from '../forms/MilitaryForm.vue'

export default {
  name: 'PersonForm',
  components: {
    MilitaryForm
  },
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
        biography: '',
        military: []
      }
    }
  },
  mounted () {
    this.formData = { ...this.person }
  },
  methods: {
    submitForm () {
      console.log(this.formData)
    },
    setForm (v, index) {
      this.formData.military[index] = v
      this.formData.military = [...this.military]
    },
    addForm () {
      this.formData.military.push(
        {        
        type: '',
        rank: '',
        startDate: '',
        endDate: '',
        description: ''
        }
      )
    },
    removeForm (index) {
      this.formData.military.splice(index, 1);
    }
  }
}
</script>

<style scoped lang="less">
.person-page {
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
