<template>
  <div>
    <MilitaryItem v-for="(military, index) in militaries" :key="index" :military="military" />
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
    militaries: {
      type: Array,
      required: true
    }
  }
};
</script>
