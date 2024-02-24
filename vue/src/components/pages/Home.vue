<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <PersonCard :person="person" />
    </section>
    <PhotoPreview size="large" photo="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg" />
    <EducationForm :education="education" />
    <PersonForm :person="person" />
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import PersonCard from '@/components/cards/PersonCard.vue';
import PhotoPreview from '../ui/PhotoPreview.vue';
import EducationForm from '../forms/EducationForm.vue';
import PersonForm from '../forms/PersonForm.vue';



export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    PhotoPreview,
    PersonCard,
    EducationForm,
    PersonForm
    
  },
  data() {
    return {
      person: {
        lastName: 'Иванов',
        firstName: 'Иван',
        middleName: 'Иванович',
        gender: 'Мужской',
        birthDate: '',
        deathDate: '',
        occupation: 'Студент',
        bio: '',
      },
      education: {
        type: 'Бакалавриат',
        level: 'Высшее',
        startDate: '01.09.2019',
        endDate: '31.08.2023',
        institutionName: 'ВГУ',
        institutionCity: ''
      }
    };
  }
}
</script>

<style scoped>
</style>
