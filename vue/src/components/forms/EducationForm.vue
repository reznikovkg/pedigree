<template>
  <div class="education-form">
    <ElInput
      v-model="formData.type"
      class="education-form__input"
      type="text"
      placeholder="Тип"
    />
    <ElInput
      v-model="formData.level"
      class="education-form__input"
      type="text"
      placeholder="Уровень"
    />
    <ElInput
      v-model="formData.startDate"
      class="education-form__input"
      type="text"
      placeholder="Дата начала обучения"
    />
    <ElInput
      v-model="formData.endDate"
      class="education-form__input"
      type="text"
      placeholder="Дата завершения обучения"
    />
    <ElInput
      v-model="formData.institutionName"
      class="education-form__input"
      type="text"
      placeholder="Название учреждения"
    />
    <ElInput
      v-model="formData.institutionCity"
      class="education-form__input"
      type="text"
      placeholder="Город учреждения"
    />
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
  watch: {
    education: {
      handler(newValue) {
        this.formData = { ...newValue }
      },
      deep: true
    }
  },
  methods: {
    emitFormData () {
      this.$emit('input', { ...this.formData })
    }
  },
  mounted () {
    this.emitFormData()
  }
}
</script>

<style scoped lang="less">
.education-form {
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;

  &__input {
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: rgba(0,0,0,0.6);
  }
}
</style>
