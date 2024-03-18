<template>
  <div class="education-list">
    <h2>Образование</h2>
    <ul>
      <EducationItem 
        v-for="(education, index) in educations" 
        :key="index" 
        :education="education" 
      />
    </ul>
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