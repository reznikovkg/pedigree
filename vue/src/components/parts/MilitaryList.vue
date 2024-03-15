<template>
  <div>
    <MilitaryItem v-for="(military, index) in military" :key="index" :military="military" />
  </div>
</template>

<script>
import MilitaryItem from './MilitaryItem.vue';

export default {
  name: 'MilitaryList',
  components: {
    MilitaryItem
  },
  props: {
    military: {
      type: Array,
      required: true
    }
  }
};
</script>
