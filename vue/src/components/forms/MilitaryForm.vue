<template>
  <div class="military-form">
    <div class="military-form__container">
      <ElInput
        v-model="form.type"
        class="military-form__input"
        type="text"
        placeholder="Тип"
      />
    </div>
    <div class="military-form__container">
      <ElInput
        v-model="form.rank"
        class="military-form__input"
        type="text"
        placeholder="Звание, должность"
      />
    </div>
    <div class="military-form__container">
      <ElInput
        v-model="form.date_start"
        class="military-form__input"
        type="text"
        placeholder="Дата начала службы"
      />
    </div>
    <div class="military-form__container">
      <ElInput
        v-model="form.date_end"
        class="military-form__input"
        type="text"
        placeholder="Дата конца службы"
      />
    </div>
    <div class="military-form__description">
      <ElInput
        v-model="form.description"
        class="military-form__input"
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

<style lang="less">
.military-form__input {

  & .el-input__inner {
    font-size: 16px;
  }

  & .el-textarea__inner {
    font-size: 16px;
  }
}
</style>

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
