<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form" />
      <div class="link__wrapper">
        <SimpleButton 
          class ="person-page__btn" 
          @click="() => editPersonHandler()"
        >
          Сохранить
        </SimpleButton>
        <SimpleButton 
          class ="person-page__btn" 
          @click="() => goBack()"
        >
          Отмена
        </SimpleButton>
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
  name: 'EditPersonPage',
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
  computed: {
    ...mapGetters('persons', [
      'getPersonById'
    ]),
    id () {
      return this.$route.params.id
    },
    person () {
      return this.getPersonById(this.id)
    }
  },
  mounted () {
    if (this.person) {
      this.form = {
        ...this.form,
        ...this.person
      }
    } else {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    ...mapActions('persons', [
      'editPerson'
    ]),
    editPersonHandler () {
      this.editPerson(this.form)
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.link__wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
