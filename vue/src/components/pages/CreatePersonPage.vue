<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="person"/>
      <button @click="createPerson" class="person-page__btn">Сохранить</button>
      <button @click="cancel" class="person-page__btn">Отмена</button>
    </section>
  </PageLayout>
</template>

<script>
import { mapActions } from 'vuex'
import { genHash } from "@/services/common"
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'

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
        military: [
          {
            type: '',
            rank: '',
            startDate: '',
            endDate: '',
            description: ''
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions('persons', [
      'addPerson'
    ]),
    createPerson() {
      const newPerson = { ...this.person, id: genHash() };
      this.$store.dispatch('persons/addPerson', newPerson)
        .then(() => {
          this.$router.push({ name: 'PERSON', params: { id: newPerson.id }});
        })
    },
    cancel () {
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.person-page {
  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
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
 