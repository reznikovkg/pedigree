<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>

<EducationForm :education="education" />
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import EducationForm from '../forms/EducationForm.vue';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    EducationForm
  },
  data() {
    return {
      education: {
        type: 'Бакалавриат',
        level: 'Высшее',
        startDate: '01.09.2019',
        endDate: '31.08.2023',
        institutionName: 'ВГУ',
        institutionCity: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
