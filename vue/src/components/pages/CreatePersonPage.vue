<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form" />
      <div class="link__wrapper">
        <SimpleButton 
          class ="person-page__btn" 
          @click="() => createPerson()"
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
  computed: {
    ...mapGetters('settings', [
      'getMode'
    ])
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
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (this.getMode === 'user') {
      this.$router.push({ name: 'HOME'})
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
 