<template>
  <div class="person-card">
    <h1 class="person-card__name">{{ fullName }}</h1>
    <h2 v-if="person.die_date" class="person-card__dates">{{ `${person.birth_date} - ${person.die_date}` }}</h2>
    <h2 v-else class="person-card__dates">{{ person.birth_date }}</h2>
    <h1 class="person-card__label-names">Родители<h2 class="person-card__information-text">-</h2> </h1>
    <h1 class="person-card__label-names">Дети<h2 class="person-card__information-text">-</h2></h1>
    <h1 class="person-card__label-names">Род деятельности<h2 class="person-card__information-text">{{ person.activity }}</h2></h1>
    <h1 class="person-card__label-names">Биография<h2 class="person-card__information-text">{{ person.biography }}</h2></h1>
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
    fullName() {
      return `${this.person.secondName} ${this.person.firstName} ${this.person.patronymic}`;
    }
  }
}
</script>


<style scoped lang ="less">
.person-card {
  
  &__name {
    font-size: 18px;
    font-weight: 700;
    font-family:Arial;
    color:black;
  }
  &__dates {
    font-size: 12px;
    color: grey;
    font-family:Arial;
    padding-bottom:20px;
  }
  &__label-names {
    font-size: 14px;
    font-weight: 700;
    font-family:Arial;
    color:black;
  }
  &__information-text {
    font-size: 14px;
    font-weight: normal;
    font-size: 10px;
    padding-bottom:20px;
    font-family:Arial;
    color:black;
  } 
     
}
</style>
