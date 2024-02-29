<template>
    <button :style="{ backgroundColor: buttonColor }" @click="goToPerson">{{ buttonText }}</button>
  </template>
  
  <script>
  export default {
    name: 'RelateButton',
    props: {
      person: Object,
      relate: {
        type: String,
        required: true,
        validator: value => ['child', 'parent'].includes(value)
      }
    },
    computed: {
      buttonText() {
        if (this.person) {
          if (this.relate === 'parent') {
            return this.person.gender === 'male' ? `Отец: ${this.formatName()}` : `Мать: ${this.formatName()}`;
          } else if (this.relate === 'child') {
            return `${this.formatName()}`;
          }
        } else {
          if (this.relate === 'parent') {
            return 'Родитель: Фамилия И. О.';
          } else if (this.relate === 'child') {
            return 'Фамилия И. О.';
          }
        }
        return '';
      },
      buttonColor() {
        if (this.person) {
          return this.person.gender === 'male' ? '#adffb4' : '#adffe6';
        } else {
          return '#adffb4'; // По умолчанию, если данные о человеке отсутствуют, цвет для кнопки - для мужского пола
        }
      }
    },
    methods: {
      formatName() {
        if (this.person) {
          return `${this.person.secondName} ${this.person.firstName[0]}. ${this.person.patronymic[0]}.`;
        }
        return 'Фамилия И. О.';
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    border: none;
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  