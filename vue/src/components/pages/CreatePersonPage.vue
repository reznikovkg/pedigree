<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form"/>
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
import { mapActions } from 'vuex'
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
          this.$router.push({ name: 'PERSON', params: { id: person.id } })
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
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
}
</style>
 