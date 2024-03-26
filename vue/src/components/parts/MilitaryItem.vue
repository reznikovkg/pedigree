<template>
  <div class="custom-card">
    <div class="custom-card__header">
      {{ military.rank }}
    </div>
    <div class="custom-card__date">
      {{ military.startDate }}<template v-if="military.endDate"> - {{ military.endDate }}</template>
    </div>
    <div class="custom-card__type">{{ military.type }}</div>
    <div class="custom-card__description">{{ military.description }}</div>
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
