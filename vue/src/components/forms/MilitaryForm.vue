<template>
  <div class="military-form">
    <div>
      <ElInput
        v-model="type"
        type="text"
        placeholder="Тип"
      />
    </div>
    <div>
      <ElInput
        v-model="rank"
        type="text"
        placeholder="Звание, должность"
      />
    </div>
    <div>
      <ElDatePicker
        v-model="startDate"
        type="date"
        placeholder="Дата начала службы"
        format="dd.MM.yyyy"
        value-format="dd.MM.yyyy"
      />
    </div>
    <div>
      <ElDatePicker
        v-model="endDate"
        type="date"
        placeholder="Дата конца службы"
        format="dd.MM.yyyy"
        value-format="dd.MM.yyyy"
      />
    </div>
    <div class="military-form__description">
      <ElInput
        v-model="description"
        type="textarea"
        placeholder="Описание"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MilitaryForm',
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
      get() {
        return this.value.type
      },
      set(value) {
        this.emitChange({ type: value })
      }
    },
    rank: {
      get() {
        return this.value.rank
      },
      set(value) {
        this.emitChange({ rank: value })
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
    description: {
      get() {
        return this.value.description
      },
      set(value) {
        this.emitChange({ description: value })
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

<style scoped lang="less">
.military-form {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 8px;

  &__description {
    grid-area: 3 / 1 / 4 / 3;
  }
}
</style>
