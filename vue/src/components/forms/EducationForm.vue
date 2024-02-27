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
    },
    value: {
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
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    emitChange(param) {
      this.$emit('change', {
        ...this.value,
        ...param
      })
    }
  },
  computed: {
    type: {
      get() {
        return this.value.type
      },
      set(value) {
        this.emitChange({ type: value })
      }
    },
    level: {
      get() {
        return this.value.level
      },
      set(value) {
        this.emitChange({ level: value })
      }
    },
    startDate: {
      get() {
        return this.value.startDate
      },
      set(value) {
        this.emitChange({ startDate: value })
      }
    },
    endDate: {
      get() {
        return this.value.endDate
      },
      set(value) {
        this.emitChange({ endDate: value })
      }
    },
    institutionName: {
      get() {
        return this.value.institutionName
      },
      set(value) {
        this.emitChange({ institutionName: value })
      }
    },
    institutionCity: {
      get() {
        return this.value.institutionCity
      },
      set(value) {
        this.emitChange({ institutionCity: value })
      }
    }
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
