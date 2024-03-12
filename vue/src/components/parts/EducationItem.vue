<template>
  <li>{{ education.type }} ({{ education.name }}) {{ education.startDate }} [{{ education.endDate }}]</li>
</template>
  
<script>
  export default {
    name: 'EducationItem',
    props: {
      education: {
        type: Object,
        required: true
      }
    }
  };
</script>
  
<style>
</style>
  