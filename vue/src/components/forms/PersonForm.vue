<template>
  <div class="custom-form">
    <ElInput
      v-model="formData.secondName"
      class="custom-form__input"
      type="text"
      placeholder="Фамилия"
    />
    <ElInput
      v-model="formData.firstName"
      class="custom-form__input"
      type="text"
      placeholder="Имя"
    />
    <ElInput
      v-model="formData.patronymic"
      class="custom-form__input"
      type="text"
      placeholder="Отчество"
    />
    <ElInput
      v-model="formData.gender"
      class="custom-form__input"
      type="text"
      placeholder="Пол"
    />
    <ElDatePicker
      v-model="formData.birth_date"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата рождения"
    />
    <ElDatePicker
      v-model="formData.die_date"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата смерти"
    />
    <div class="custom-form__full-width">
      <ElInput
        v-model="formData.activity"
        class="custom-form__input"
        type="textarea"
        placeholder="Род деятельности"
      />
    </div>
    <div class="custom-form__full-width">
      <ElInput
        v-model="formData.biography"
        class="custom-form__input"
        type="textarea"
        placeholder="Биография"
      />
    </div>
    <div> 
      <button @click="() => submitForm()" class="person-page__btn">Сохранить</button>
    </div>
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
    margin-left: 0px;
    margin-bottom: 20px;
  }
}
</style>
