<template>
  <div class="work-form">
    <div>
      <ElInput
        v-model="countryAndCity"
        type="text"
        placeholder="Страна, город"
      />
    </div> 
    <div>
      <ElInput
        v-model="company"
        type="text"
        placeholder="Организация"
      />
    </div>
    <div>  
      <ElDatePicker
        v-model="startDate"
        type="date"
        placeholder="Дата начала"
        format="dd.MM.yyyy"
        value-format="dd.MM.yyyy"
      />
    </div> 
    <div> 
      <ElDatePicker
        v-model="endDate"
        type="date"
        placeholder="Дата завершения"
        format="dd.MM.yyyy"
        value-format="dd.MM.yyyy"
      />
    </div>
    <div class="work-form__position">
      <ElInput
        v-model="position"
        type="textarea"
        placeholder="Должность"
      />
     </div>
     <div class="work-form__description"> 
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
  name: 'WorkForm',
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
    countryAndCity: {
      get() {
        return this.value.countryAndCity
      },
      set(value) {
        this.emitChange({ countryAndCity: value })
      }
    },
    company: {
      get() {
        return this.value.company
      },
      set(value) {
        this.emitChange({ company: value })
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
    position: {
      get() {
        return this.value.position
      },
      set(value) {
        this.emitChange({ position: value })
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
.work-form {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 8px;

  &__position {
    grid-area: 3 / 1 / 4 / 3;
  }

  &__description{
    grid-area: 4 / 1 / 4 / 3;
  }
}
</style>
