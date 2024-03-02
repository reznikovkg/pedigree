<template>
  <div class="custom-form">
    <div class="custom-form__full-width">
      <ElInput
        v-model="partner"
        class="custom-form__input"
        type="text"
        placeholder="Партнёр"
      />
    </div>
    <ElDatePicker
      v-model="date_start"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата свадьбы"
    />
    <ElDatePicker
      v-model="date_end"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата развода"
    />
  </div>
</template>

<script>
export default {
  name: 'WeddingForm',
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
    partner: {
      get () {
        return this.value.partner.name
      },
      set (value) {
        this.emitFormData({ partner: value })
      }
    },
    date_start: {
      get () {
        return this.value.date_start
      },
      set (value) {
        this.emitFormData({ date_start: value })
      }
    },
    date_end: {
      get () {
        return this.value.date_end
      },
      set (value) {
        this.emitFormData({ date_end: value })
      }
    },
  },
  methods: {
    emitFormData (param) {
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
