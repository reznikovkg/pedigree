<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>

    <EducationForm :education="education" />
    <PersonForm :person="person"/>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import { helpModal } from "@/mixins/modals";
import EducationForm from '../forms/EducationForm.vue';
import PersonForm from '../forms/PersonForm.vue';


export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    EducationForm,
    PersonForm

  },
  data () {
    return {
      person: {
        lastName: 'Боклагов',
        firstName: 'Егор',
        middleName: 'Игоревич',
        gender: 'Мужской',
        birthDate: '',
        deathDate: '',
        occupation: 'Студент',
        bio: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
