<template>
  <div class="education-form">
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.type" placeholder="Тип">
    </div>
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.level" placeholder="Уровень">
    </div>
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.startDate" placeholder="Дата начала обучения">
    </div>
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.endDate" placeholder="Дата завершения обучения">
    </div>
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.institutionName" placeholder="Название учреждения">
    </div>
    <div class="education-form__form-group">
      <input class="education-form__educ-inp" type="text" v-model="formData.institutionCity" placeholder="Город учреждения">
    </div>
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
    this.formData = { ...this.education };
  },
  methods: {
    submitForm () {
      this.$emit('submit', this.formData);
    }
  }
}
</script>

<style scoped lang="less">
.education-form {
  max-width: 400px;
  height: 150px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  
  &__form-group {
    width: 180px;
    height: 35px;
    margin-top: 6px;
    margin-left: 8px;
  }
  
  &__educ-inp {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.04);
    height: 50%;
  }
}
</style>
