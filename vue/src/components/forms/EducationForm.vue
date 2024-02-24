<template>
  <div class="education-form">
    <input
      v-model="formData.type"
      class="education-form__input"
      type="text"
      placeholder="Тип"
    >
    <input class="education-form__input" type="text" v-model="formData.level" placeholder="Уровень">
    <input class="education-form__input" type="text" v-model="formData.startDate" placeholder="Дата начала обучения">
    <input class="education-form__input" type="text" v-model="formData.endDate" placeholder="Дата завершения обучения">
    <input class="education-form__input" type="text" v-model="formData.institutionName" placeholder="Название учреждения">
    <input class="education-form__input" type="text" v-model="formData.institutionCity" placeholder="Город учреждения">
  </div>
</template>

<script>
export default {
  name: 'EducationForm',
  props: {
    education: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {
        type: '',
        level: '',
        startDate: '',
        endDate: '',
        institutionName: '',
        institutionCity: ''
      }
    }
  },
  mounted () {
    this.formData = { ...this.education }
  },
  methods: {
    submitForm () {
      this.$emit('submit', this.formData)
    }
  }
}
</script>

<style scoped lang="less">
.education-form {
  max-width: 400px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;

  &__input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
  }
}
</style>