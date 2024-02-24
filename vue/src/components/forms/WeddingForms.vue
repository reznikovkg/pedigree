<template>
  <form class="wedding-form">
    <div class="wedding-form__person">
      <input class="wedding-form__inp" type="text" placeholder="Партнёр" v-model="form.partner.name">
    </div>
    <div class="wedding-form__date-start">
      <input class="wedding-form__inp" type="text" placeholder="Дата свадьбы" v-model="form.date_start">
    </div>
    <div class="wedding-form__date-end">
      <input class="wedding-form__inp" type="text" placeholder="Дата развода" v-model="form.date_end">
    </div>
  </form>
</template>
  
<script>
export default {
  name: 'WeddingForm',
  props: {
    wedding: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      form: {
        partner: '',
        date_start: '',
        date_end: ''
      }
    };
  },
  mounted () {
    this.form = {...this.wedding}
  }
}
</script>
  
<style scoped lang="less">
.wedding-form {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  &__inp{
    background: #f9f9f9;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #acacac;
  }
  &__person{
    grid-area: 1 / 1 / 2 / 2;
  }
  &__date-start {
    grid-area: 2 / 1 / 3 / 2;
  }
  &__date-end {
    grid-area: 2 / 2 / 3 / 2;
  }
}
</style>