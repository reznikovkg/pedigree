<template>
  <div class="military-card">
    <div class="military-card__rank">{{ military.rank }}</div>
    <div class="military-card__date">
      {{ military.startDate }}<template v-if="military.endDate"> - {{ military.endDate }}</template>
    </div>
    <div class="military-card__type">{{ military.type }}</div>
    <div class="military-card__description">{{ military.description }}</div>
  </div>
</template>
  
<script>
export default {
  name: 'MilitaryItem',
  props: {
    military: {
      type: Object,
      required: true
    }
  }
}
</script>
  
<style scoped lang ="less">
.military-card {
  border-radius: 24px;
  background-color: #f5f5f5;
  box-shadow: 1.5px 7px 5px 1.5px rgba(0, 0, 0, 0.1), -1.5px 7px 5px -1.5px rgba(0, 0, 0, 0.2);
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-bottom: 15px;
  padding: 20px;
  height: 215px;
  padding-left: 25px;
  font-size: 20px;

  &__rank {
    font-family: 'Inter', sans-serif;
    color: #000000;
    font-weight: 700;
    white-space: nowrap;
  }

  &__date {
    font-family: 'Inter', sans-serif;
    color: #757575;
    font-weight: 700;
    white-space: nowrap;
  }

  &__type {
    font-family: 'Inter', sans-serif;
    color: #000000;
    grid-column: span 2;
    white-space: nowrap;
    font-weight: 700;
  }

  &__description {
    font-family: 'Inter', sans-serif;
    color: #757575;
    grid-column: span 2;
    white-space: nowrap;
    font-weight: 500;
    font-size: 14px;
    min-height: 200px !important;
  }
}
</style>
