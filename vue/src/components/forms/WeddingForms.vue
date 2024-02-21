<template>
  <form class="wedding_form">
    <div class="wedding_form--person">
      <input class="wedding_form--inp" type="text" placeholder="Партнёр" v-model="person">
    </div>
    <div class="wedding_form--date_start">
      <input class="wedding_form--inp" type="text" placeholder="Дата свадьбы" v-model="date_start">
    </div>
    <div class="wedding_form--date_end">
      <input class="wedding_form--inp" type="text" placeholder="Дата развода" v-model="date_end">
    </div>
  </form>
</template>
  
<script>
export default{
  name: 'WeddingForm',
  props: {
    wedding: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      person: '',
      date_start: '',
      date_end: ''
    }
  },
  mounted: function() {
    this.person = this.wedding.partner.name
    this.date_start = this.wedding.date_start
    this.date_end = this.wedding.date_end
  }
}
</script>
  
<style scoped lang="less">
.wedding_form{
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  &--inp{
    background: #f9f9f9;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #acacac;
  }
  &--person{
    grid-area: 1 / 1 / 2 / 2;
  }
  &--date_start{
    grid-area: 2 / 1 / 3 / 2;
  }
  &--date_end{
    grid-area: 2 / 2 / 3 / 2;
  }
}
</style>