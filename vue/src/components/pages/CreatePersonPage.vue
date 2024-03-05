<template>
  <PageLayout>
    <PersonForm v-model="person"/>
    <button @click="() => createPerson()" class="person-page__btn">Сохранить</button>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CreatePersonPage',
  components: {
    PageLayout,
    PersonForm
  },
  data () {
    return {
      person: {
        id: '',
        secondName: '',
        firstName: '',
        patronymic: '',
        birth_date: '',
        die_date: '',
        gender: '',
        biography: '',
        activity: '',
      }
    }
  },
  methods: {
    ...mapActions('persons', ['addPerson']),
    createPerson () {
      this.addPerson('persons', this.person)
    }
  }
}
</script>

<style lang="less">
.person-page {
  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: aqua;
    color: black;
    font-weight: 600;
    cursor: pointer;
    margin-left: 0px;
    margin-bottom: 20px;
  }
}
</style>
