<template>
  <PageLayout>
    <PersonCard :person="person" />
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLayout from '../parts/PageLayout.vue';
import PersonCard from '@/components/cards/PersonCard.vue';

export default {
  name: 'PersonPage',
  components: {
    PageLayout,
    PersonCard
  },
  data () {
    return {
      form: {
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
  computed: {
    ...mapGetters('persons', [
      'getPersonById'
    ]),
    person () {
      return this.getPersonById(this.id)
    },
    id () {
      return this.$route.params.id
    }
  },
  mounted () {
    if (this.person) {
      this.form = { ...this.person }
    }
  }
};
</script>
