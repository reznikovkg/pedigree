<template>
  <PageLayout>
    <PersonForm v-model="person"/>
    <button @click="() => submitForm()" class="person-page__btn">Сохранить</button>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditPersonPage',
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
  mounted () {
    this.person = {...this.getPersonById(this.id)}
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    ...mapActions('persons', ['editPerson']),
    ...mapGetters('persons', ['getPersonById'])
  },
  methods: {
    submitForm() {
      if (this.person.firstName == '' || this.person.firstName == undefined)
        this.$router.push({ path: '/' })
      else
        return this.editPerson('persons', this.person)
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
