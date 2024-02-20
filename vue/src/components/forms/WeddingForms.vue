<template>
  <form class="wedding_form">
    <input class="wedding_form--person" type="text" placeholder="Партнёр" v-model="person">
    <input class="wedding_form--date_start" type="text" placeholder="Дата свадьбы" v-model="date_start">
    <input class="wedding_form--date_end" type="text" placeholder="Дата развода" v-model="date_end">
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
  data: (props) => {
    return{
      person: props.wedding.partner.name,
      date_start: props.wedding.date_start,
      date_end: props.wedding.date_end,
    }
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
  & input{
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