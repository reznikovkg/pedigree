<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="person"/>
      <SimpleButton class ="person-page__btn" type="primary" @click="() => createPerson()">Сохранить</SimpleButton>
      <SimpleButton class ="person-page__btn" type="danger" @click="() => cancel()">Отмена</SimpleButton>
    </section>
  </PageLayout>
</template>

<script>
import { mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'
import SimpleButton from '../ui/SimpleButton.vue'

export default {
  name: 'CreatePersonPage',
  components: {
    PageLayout,
    PersonForm,
    SimpleButton
  },
  data () {
    return {
      person: {
        id: '',
        secondName: '',
        firstName: '',
        patronymicName: '',
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
    createPerson () {
      this.addPerson(this.person)
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
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  &__link {
    width: 100%;

    &__wrapper {
      flex: 1;
    }
  }
}
</style>
 