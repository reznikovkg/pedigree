<template>
  <div class="person-card">
    <h1>{{ fullName }}</h1>
    <span class="person-card__dates">{{ person.birth_date }}</span>
    <span v-if="person.die_date" class="person-card__dates"> - {{ person.die_date }}</span>

    <h2>Родители</h2>
    <div class="person-card__information-text">
      <p>Мать {{ mother }}</p>
      <p>Отец {{ father }}</p>
    </div>

    <h2>Дети </h2>
    <div class="person-card__information-text">-</div>

    <h2>Род деятельности</h2>
    <div class="person-card__information-text">{{ person.activity }}</div>

    <h2>Биография</h2>
    <div class="person-card__information-text">{{ person.biography }}</div>

    <WeddingsList :weddings="person.weddingsData" />
  </div>
</template>

<script>
import WeddingsList from '../parts/WeddingsList.vue';

export default {
  components: {
    WeddingsList
  },
  props: {
    person: {
      type: Object,
      required: true
    },
    persons: {
      type: [person]
    },
  },
  computed: {
    fullName () {
      return `${this.person.secondName} ${this.person.firstName} ${this.person.patronymic}`;
    },
    mother () {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].children.includes(person.id)) {
          if (persons[i].gender == FEMALE) {
            return persons[i].id;
          } 
        }
      }
    },
    father () {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].children.includes(person.id)) {
          if (persons[i].gender == MALE) {
            return persons[i].id;
          } 
        }
      }
    }
  }
}
</script>

<style scoped lang ="less">
.person-card {

  &__dates {
    font-size: 12px;
    color: grey;
    padding-bottom: 20px;
  }

  &__information-text {
    font-weight: 500;
    font-size: 10px;
    padding-bottom: 20px;
    color: black;
  }
}
</style>
