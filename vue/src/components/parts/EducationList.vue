<template>
  <div class="custom-list">
    <EducationItem 
      v-for="(education, index) in educations" 
      :key="index" 
      :education="education" 
    />
  </div>
</template>
  
<script>
import EducationItem from './EducationItem.vue'

export default {
  name: 'EducationList',
  components: {
    EducationItem
  },
  props: {
    educations: {
      type: Array,
      required: true
    }
  }
}
</script>
  
<style>
</style>
