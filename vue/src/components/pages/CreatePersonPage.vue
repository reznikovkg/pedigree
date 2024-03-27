<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form" />
      <SimpleButton 
        class ="person-page__btn" 
        type="primary" 
        @click="() => createPerson()"
      >
        Сохранить
      </SimpleButton>
      <SimpleButton 
        class ="person-page__btn" 
        type="danger" 
        @click="() => cancel()"
      >
        Отмена
      </SimpleButton>
      <div v-if="errors.length">
        <b>Пожалуйста, исправьте указанные ошибки:</b>
        <ul class="person-page__error">
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'
import { emptyPerson } from '@/services/person'
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
      form: emptyPerson(),
      errors: []
    }
  },
  computed: {
    ...mapGetters('settings', [
      'getMode'
    ])
  },
  methods: {
    ...mapActions('persons', [
      'addPerson'
    ]),
    validateDates (startDate, endDate, message) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      if (end < start) {
        this.errors.push(message)
      }
    },
    checkForm () {
      this.errors = []
      this.validateDates(this.form.birthDate, this.form.dieDate, 'Дата смерти должна быть позже или совпадать с датой рождения'),
      this.form.militaries.forEach((military, index) => {
        this.validateDates(military.startDate, military.endDate, `Дата окончания службы ${index + 1} должна быть позже или совпадать с датой начала службы`)
      }),
      this.form.weddings.forEach((wedding, index) => {
        this.validateDates(wedding.startDate, wedding.endDate, `Дата развода ${index + 1} должна быть позже или совпадать с датой свадьбы`)
      }),
      this.form.educations.forEach((education, index) => {
        this.validateDates(education.startDate, education.endDate, `Дата окончания обучения ${index + 1} должна быть позже или совпадать c датой начала обучения`)
      }),
      this.form.works.forEach((work, index) => {
        this.validateDates(work.startDate, work.endDate, `Дата окончания работы ${index + 1} должна быть позже или совпадать c датой начала работы`)
      })
      return !this.errors.length
    },
    createPerson () {
      if (this.checkForm()) {
        this.addPerson(this.form)
          .then((person) => {
            this.$router.push({ name: this.$routes.PERSON, params: { id: person.id } })
          })
      }
    },
    cancel () {
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (this.getMode === 'user') {
      this.$router.push({ name: this.$routes.HOME })
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

  &__error {
    color: red;
  }
}
</style>
 