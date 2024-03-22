<template>
  <PageLayout>
    <section class="p-16">
      Родословная
<!--      <button @click="() => openHelpModal()">Open modal</button>-->
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals"
import EducationForm from '../forms/EducationForm.vue'
import WeddingForm from '../forms/WeddingForm.vue'
import PersonForm from '../forms/PersonForm.vue'
import PopOver from "@/components/ui/PopOver"
import { mapGetters } from 'vuex'
import WorkForm from '../forms/WorkForm.vue'

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    EducationForm,
    WeddingForm,
    PersonForm,
    PopOver,
    WorkForm,
  },
  methods: {
    redirectToDefaultPersonPage() {
      const first = this.getAllPersons[0] || {}
      const personId = this.getCenter || first.id
      if (personId) {
        this.$router.push({name: 'PERSON', params: { id: personId || '1' } })
      }
    }
  },
  mounted () {
    this.redirectToDefaultPersonPage();
  }
}
</script>
