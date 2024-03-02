<template>
  <div class="custom-input">
    <div class="custom-input__container">
      <ElInput
        v-model="formData.secondName"
        class="custom-input__input"
        type="text"
        placeholder="Фамилия"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="formData.firstName"
        class="custom-input__input"
        type="text"
        placeholder="Имя"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="formData.patronymic"
        class="custom-input__input"
        type="text"
        placeholder="Отчество"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="formData.gender"
        class="custom-input__input"
        type="text"
        placeholder="Пол"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="formData.birth_date"
        class="custom-input__input"
        type="text"
        placeholder="Дата рождения"
      />
    </div>
    <div class="custom-input__container">
       <ElInput
        v-model="formData.die_date"
        class="custom-input__input"
        type="text"
        placeholder="Дата смерти"
      />
    </div>
    <div class="custom-input__description">
      <ElInput
        v-model="formData.activity"
        class="custom-input__input"
        type="textarea"
        placeholder="Род деятельности"
      />
    </div>
    <div class="custom-input__description">
      <ElInput
        v-model="formData.biography"
        class="custom-input__input"
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
