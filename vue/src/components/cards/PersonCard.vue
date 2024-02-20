<template>
    <div class="person-card">
      <br>
      <div class="person-card__name">{{ person.secondName }} {{ person.firstName }} {{ person.patronymic }}</div>
      <div class="person-card__dates"> {{ formattedDates }}</div>
      <br>
      <div class="person-card__label-names">Родители<br><span class="person-card__information-text">-</span></div>
      <br>
      <div class="person-card__label-names">Дети<br><span class="person-card__information-text">-</span></div>
      <br>
      <div class="person-card__label-names">Род деятельности<br><span class="person-card__information-text">{{ person.activity }}</span></div>
      <br>
      <div class="person-card__label-names"><strong>Биография</strong><br><span class="person-card__information-text">{{ person.biography }}</span></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      person: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedDates() {
        if (this.person.die_date) {
          return `${this.person.birth_date} - ${this.person.die_date}`;
        } else {
          return `${this.person.birth_date}`;
        }
      }
    }
  }
  </script>
  
  <style scoped lang ="less">
  .person-card {
    font-family: Arial;
    font-size: 14px;
      
    &__name {
      font-size: 18px;
      font-weight: bold;
    }

    &__dates {
      font-size: 12px;
      color: grey;
    }
    &__label-names {
      font-weight: bold;
    }
    &__information-text {
      font-weight: normal;
      font-size: 10px;
    }      
  }
  </style>
  