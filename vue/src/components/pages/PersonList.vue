<template>
  <PageLayout>
    <div class="person-container">
      <ElInput
        v-model="search"
        class="custom-form__input"
        placeholder="Поиск"
        clearable
      />
      <div 
        v-if="persons.length > 0" 
        class="person-container__wrapper"
      >
        <WidePersonCard v-for="(person, id) in persons" :key="id" :person="person"/>
      </div>
      <div v-else>
        Список пуст
      </div>
    </div>
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex';
import PageLayout from '../parts/PageLayout.vue';
import WidePersonCard from '../cards/WidePersonCard.vue';

export default {
  name: 'PersonList',
  components: {
    PageLayout,
    WidePersonCard
  },
  data () {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters('persons', [
      'getAllPersons',
      'filteredPersons'
    ]),
    fields () {
      return ['id', 'firstName', 'secondName', 'patronymicName', 'birth_date']
    },
    persons () {
      if(this.search.length >= 3) {
        return this.filteredPersons((person) => this.searchFunc(person))
      }
      return this.getAllPersons.persons
    },
  },
  methods: {
    searchFunc(person) {
      return Object.keys(person).some(key => {
          return person[key].toString().toLowerCase().includes(this.search.toLowerCase()) && this.fields.includes(key)
      })
    }
  }
};
</script>

<style scoped lang="less">
.person-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>