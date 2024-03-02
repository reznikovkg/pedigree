<template>
  <div class="custom-input">
    <div class="custom-input__container">
      <ElInput
        v-model="type"
        class="custom-input__input"
        type="text"
        placeholder="Тип"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="level"
        class="custom-input__input"
        type="text"
        placeholder="Уровень"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="startDate"
        class="custom-input__input"
        type="text"
        placeholder="Дата начала обучения"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="endDate"
        class="custom-input__input"
        type="text"
       placeholder="Дата завершения обучения"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="institutionName"
        class="custom-input__input"
        type="text"
        placeholder="Название учреждения"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="institutionCity"
        class="custom-input__input"
        type="text"
        placeholder="Город учреждения"
     />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationForm',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    type: {
      get () {
        return this.value.type
      },
      set (value) {
        this.emitChange({ type: value })
      }
    },
    level: {
      get () {
        return this.value.level
      },
      set (value) {
        this.emitChange({ level: value })
      }
    },
    startDate: {
      get () {
        return this.value.startDate
      },
      set (value) {
        this.emitChange({ startDate: value })
      }
    },
    endDate: {
      get () {
        return this.value.endDate
      },
      set (value) {
        this.emitChange({ endDate: value })
      }
    },
    institutionName: {
      get () {
        return this.value.institutionName
      },
      set (value) {
        this.emitChange({ institutionName: value })
      }
    },
    institutionCity: {
      get () {
        return this.value.institutionCity
      },
      set (value) {
        this.emitChange({ institutionCity: value })
      }
    }
  },
  methods: {
    emitChange (param) {
      this.$emit('change', {
        ...this.value,
        ...param
      })
    }
  }
}
</script>

<style>
</style>
