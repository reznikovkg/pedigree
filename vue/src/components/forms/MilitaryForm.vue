<template>
  <div class="custom-form">
    <ElInput
      v-model="form.type"
      class="custom-form__input"
      type="text"
      placeholder="Тип"
    />
    <ElInput
      v-model="form.rank"
      class="custom-form__input"
      type="text"
      placeholder="Звание, должность"
    />
    <ElDatePicker
      v-model="form.date_start"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата начала службы"
    />
    <ElDatePicker
      v-model="form.date_end"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата конца службы"
    />
    <div class="custom-form__full-width">
      <ElInput
        v-model="form.description"
        class="custom-form__input"
        type="textarea"
        placeholder="Описание"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MilitaryForm',
  props: {
    military: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      form: {
        type: '',
        rank: '',
        date_start: '',
        date_end: '',
        description: ''
      }
    };
  },
  mounted () {
    this.form = { ...this.military }
  }
}
</script>

<style>
</style>
