<template>
  <div class="custom-input">
    <div class="custom-input__container">
      <ElInput
        v-model="partner"
        class="custom-input__input"
        type="text"
        placeholder="Партнёр"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="date_start"
        class="custom-input__input"
        type="text"
        placeholder="Дата свадьбы"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="date_end"
        class="custom-input__input"
        type="text"
        placeholder="Дата развода"
      />
    </div>
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
