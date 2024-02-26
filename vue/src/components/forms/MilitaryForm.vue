<template>
  <div class="military-form">
    <div class="military-form__container">
      <ElInput
        v-model="form.type" 
        class="military-form__inp" 
        type="text" 
        placeholder="Тип" 
      />
    </div>
    <div class="military-form__container">
      <ElInput 
        v-model="form.rank"
        class="military-form__inp" 
        type="text" 
        placeholder="Звание, должность" 
      />
    </div>
    <div class="military-form__container">
      <ElInput
        v-model="form.date_start"
        class="military-form__inp" 
        type="text" 
        placeholder="Дата начала службы" 
      />
    </div>
    <div class="military-form__container">
      <ElInput 
        v-model="form.date_end"
        class="military-form__inp" 
        type="text" 
        placeholder="Дата конца службы" 
      />
    </div>
    <div class="military-form__description">
      <ElInput
        v-model="form.description" 
        class="military-form__inp" 
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
    this.form = {...this.military}
  }
}
</script>

<style lang="less">
.military-form__inp {
  border: 1px solid #8d8d8d;
  color: #b4b4b4;
  border-radius: 6px;
  & .el-input__inner {
    font-weight: 600;
    font-size: 18px;
  }
  & .el-textarea__inner {
    font-weight: 600;
    font-size: 18px;
  }
}
</style>

<style scoped lang="less">
.military-form {
  width: 450px;
  display: grid;
  grid-gap: 15px;
  padding: 8px;
  &__description {
    grid-area: 3 / 1 / 4 / 3;
  }
}
</style>
