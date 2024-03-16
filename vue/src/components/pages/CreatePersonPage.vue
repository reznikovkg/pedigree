<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form"/>
      <button @click="() => createPerson()" class="person-page__btn">Сохранить</button>
    </section>
  </PageLayout>
</template>

<script>
import { mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'
import { emptyPerson } from '@/services/person'

export default {
  name: 'CreatePersonPage',
  components: {
    PageLayout,
    PersonForm
  },
  data () {
    return {
      form: emptyPerson()
    }
  },
  methods: {
    ...mapActions('persons', [
      'addPerson'
    ]),
    createPerson () {
      this.addPerson(this.form)
        .then((person) => {
          console.log(person)
        })
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
 