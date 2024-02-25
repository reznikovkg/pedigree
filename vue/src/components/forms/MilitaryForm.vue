<template>
  <form class="military-form">
    <div class="military-form__type">
      <el-input
      v-model="form.type" 
      :disabled="military.type ? true : false"
      class="military-form__inp" 
      type="text" 
      placeholder="Тип" 
      ></el-input>
    </div>
    <div class="military-form__rank">
        <el-input 
        v-model="form.rank"
        :disabled="military.rank ? true : false"
        class="military-form__inp" 
        type="text" 
        placeholder="Звание, должность" 
        ></el-input>
    </div>
    <div class="military-form__date-start">
        <el-input
        v-model="form.date_start"
        :disabled="military.date_start ? true : false" 
        class="military-form__inp" 
        type="text" 
        placeholder="Дата начала службы" 
        ></el-input>
    </div>
    <div class="military-form__date-end">
        <el-input 
        v-model="form.date_end"
        :disabled="military.date_end ? true : false" 
        class="military-form__inp" 
        type="text" 
        placeholder="Дата конца службы" 
        ></el-input>
    </div>
    <div class="military-form__description">
        <el-input
        v-model="form.description" 
        :disabled="military.description ? true : false" 
        class="military-form__inp" 
        type="textarea"
        placeholder="Описание" 
        ></el-input>
    </div>
  </form>
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
.military-form__inp{
  border: 1px solid #8d8d8d;
  color: #b4b4b4;
  border-radius: 6px;
  & .el-input__inner{
    font-weight: 600;
    font-size: 18px;
  }
  & .el-textarea__inner{
    font-weight: 600;
    font-size: 18px;
  }
}
</style>

<style scoped lang="less">
.military-form {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 8px;
  &__type {
    grid-area: 1 / 1 / 2 / 2;
  }
  &__rank {
    grid-area: 1 / 2 / 2 / 3;
  }
  &__date-start {
    grid-area: 2 / 1 / 3 / 2;
  }
  &__date-end {
    grid-area: 2 / 2 / 3 / 2;
  }
  &__description {
    grid-area: 3 / 1 / 4 / 3;
  }
}
</style>
  