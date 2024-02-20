<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <PersonCard :person="person" />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import PersonCard from '@/components/cards/PersonCard.vue';



export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    PersonCard
  },
  data() {
    return {
      person: {
        id: 'gi6437tf63i4ftfo43f',
        secondName: 'Иванов',
        firstName: 'Иван',
        patronymic: 'Иванович',
        birth_date: '01.01.2000',
        die_date: '',
        gender: 'male',
        children: ['y3g46yf34fy636b','3345fg35yg34f3f46'],
        biography: 'Родился в ...',
        activity: 'Бухгалтер',
        photo: '/pictures/ivan.jpg'
      }
    };
  }
}
</script>

<style>
</style>
