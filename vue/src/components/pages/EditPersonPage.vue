<template>
  <PageLayout>
    <section class="p-16">
      <PersonForm v-model="form"/>
      <button @click="() => editPersonHandler()" class="person-page__btn">Сохранить</button>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'
import { emptyPerson } from '@/services/person'

export default {
  name: 'EditPersonPage',
  components: {
    PageLayout,
    PersonForm
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
 