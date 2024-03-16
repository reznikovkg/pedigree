<template>
  <div class="custom-form">
    <PopOver>
      <ElInput
        v-model="type"
        class="custom-form__input"
        type="text"
        placeholder="Тип"
      />

      <template slot="popover">
        <InputHelper 
          :options="hints" 
          @select="(hint) => selectHint(hint)"
        />
      </template>
    </PopOver>
    <ElInput
      v-model="level"
      class="custom-form__input"
      type="text"
      placeholder="Уровень"
    />
    <ElDatePicker
      v-model="startDate"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата начала обучения"
    />
    <ElDatePicker
      v-model="endDate"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата завершения обучения"
    />
    <ElInput
      v-model="institutionName"
      class="custom-form__input"
      type="text"
      placeholder="Название учреждения"
    />
    <ElInput
      v-model="institutionCity"
      class="custom-form__input"
      type="text"
      placeholder="Город учреждения"
    />
  </div>
</template>

<script>
import PopOver from '../ui/PopOver.vue'
import InputHelper from '../ui/InputHelper.vue'

export default {
  name: 'EducationForm',
  components: {
    PopOver,
    InputHelper
  },
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
    },
    hints: {
      get() {
        return ['Бакалавриат', 'Магистратура', 'Аспирантура']
      }
    }
  },
  methods: {
    emitChange (param) {
      this.$emit('change', {
        ...this.value,
        ...param
      })
    },
    selectHint(hint) {
      this.type = hint;
    }
  }
}
</script>

<style>
</style>
