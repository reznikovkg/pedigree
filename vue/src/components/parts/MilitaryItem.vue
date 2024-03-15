<template>
  <div>
    <MilitaryForm 
      :value="military"
      class="custom-form__input"
    />
  </div>
</template>

<script>
import MilitaryForm from '../forms/MilitaryForm.vue';

export default {
  name: 'MilitaryItem',
  components: {
    MilitaryForm
  },
  props: {
    military: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
