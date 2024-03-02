<template>
  <div class="custom-input">
    <div class="custom-input__container">
      <ElInput
        v-model="form.type"
        class="custom-input__input"
        type="text"
        placeholder="Тип"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="form.rank"
        class="custom-input__input"
        type="text"
        placeholder="Звание, должность"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="form.date_start"
        class="custom-input__input"
        type="text"
        placeholder="Дата начала службы"
      />
    </div>
    <div class="custom-input__container">
      <ElInput
        v-model="form.date_end"
        class="custom-input__input"
        type="text"
        placeholder="Дата конца службы"
      />
    </div>
    <div class="custom-input__description">
      <ElInput
        v-model="form.description"
        class="custom-input__input"
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
