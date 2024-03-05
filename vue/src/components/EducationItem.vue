<template>
    <div class="education-item">
      <p>Школа ({{ education.school.name }}) {{ education.school.startDate }} [{{ education.school.endDate }}]</p>
      <p>ВУЗ ({{ education.univercity.name }}) {{ education.univercity.startDate }} [{{ education.univercity.endDate }}]</p>
    </div>
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
  .education-item {
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
  }
</style>
  