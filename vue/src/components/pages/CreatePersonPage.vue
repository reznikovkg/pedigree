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
    checkForm () {
      this.errors = [];
      if (this.form.birthDate && this.form.dieDate) {
        if (new Date(this.form.dieDate) < new Date(this.form.birthDate)) {
          this.$message.error('Дата смерти должна быть позже или совпадать с датой рождения')
          return
        }
      }
      for (let military of this.form.militaries) {
        if (military.startDate && military.endDate) {
          if (new Date(military.endDate) < new Date(military.startDate)) {
            this.$message.error('Дата окончания службы должна быть позже или совпадать c датой начала службы')
            return;
          }
        }
      }
      for (let wedding of this.form.weddings) {
        if (wedding.startDate && wedding.endDate) {
          if (new Date(wedding.endDate) < new Date(wedding.startDate)) {
            this.$message.error('Дата развода должна быть позже или совпадать c датой свадьбы')
            return;
          }
        }
      }
      for (let education of this.form.educations) {
        if (education.startDate && education.endDate) {
          if (new Date(education.endDate) < new Date(education.startDate)) {
            this.$message.error('Дата окончания обучения должна быть позже или совпадать c датой начала обучения')
            return;
          }
        }
      }
      for (let work of this.form.works) {
        if (work.startDate && work.endDate) {
          if (new Date(work.endDate) < new Date(work.startDate)) {
            this.$message.error('Дата окончания работы должна быть позже или совпадать c датой начала работы')
            return;
          }
        }
      }
      if (!this.errors.length) {
        return true;
      }
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
}
</style>
 