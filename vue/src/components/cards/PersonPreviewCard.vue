<template>
    <div class="person-preview-card">
      <div class="person-info">
        <h2 class="second-name">{{ person.secondName }}</h2>
        <h3 class="first-name">{{ person.firstName }}</h3>
        <h4 class="patronomic">{{ person.patronomic }}</h4>
        <p class="birth-date">Дата рождения: {{ person.birthDate }}</p>
        <p class="person-id">ID: {{ person.id }}</p>
      </div>
      <div class="status-indicator"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PersonPreviewCard',
    props: {
      person: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .person-preview-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    position: relative;
    margin: 1em;
  }
  
  .person-info {
    font-family: 'Inter', sans-serif;
  }
  
  .second-name {
    margin-top: 50%;
  }
  
  .first-name {
    margin-bottom: 5%;
  }
  
  .patronomic {
    margin-bottom: 9%;
  }
  
  .birth-date {
    margin-top: 14%;
    margin-bottom: 18%;
  }
  
  .person-id {
    margin-top: 14%;
  }
  
  .status-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  