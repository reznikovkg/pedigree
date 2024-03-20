<template>
  <PageLayout>
    <ScrollingPanel :sections="sections" />

    <NavigationPanel />

    <section class="p-16">
      <PersonCard :person="person" />
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonCard from '@/components/cards/PersonCard.vue'
import NavigationPanel from '../ui/NavigationPanel.vue'
import ScrollingPanel from '@/components/ui/ScrollingPanel.vue'

export default {
  name: 'PersonPage',
  components: {
    PageLayout,
    PersonCard,
    NavigationPanel,
    ScrollingPanel
  },
  data() {
    return {
      sections: [
        { id: 'info-section', title: 'Общая информация'},
        { id: 'parents-section', title: 'Родители'},
        { id: 'childs-section', title: 'Дети'},
        { id: 'weddings-section', title: 'Брачные союзы'},
        { id: 'military-section', title: 'Военная служба'}
      ]
    }
  },
  computed: {
    ...mapGetters('persons', [
      'getPersonById',
    ]),
    person () {
      return this.getPersonById(this.id)
    },
    id () {
      return this.$route.params.id
    }
  }
};
</script>
