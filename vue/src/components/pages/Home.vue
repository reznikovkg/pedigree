<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <ElButton type="primary">Кнопка</ElButton>
      <PersonCard :person="person" />
      <PhotoPreview size="large" photo="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg" />
      <EducationForm v-model="education" />
      <WeddingForm :wedding="wedding" />
      <PersonForm :person="person" />
      <MilitaryForm :military="military"/>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals"
import PersonCard from '@/components/cards/PersonCard.vue'
import PhotoPreview from '../ui/PhotoPreview.vue'
import EducationForm from '../forms/EducationForm.vue'
import WeddingForm from '../forms/WeddingForm.vue'
import PersonForm from '../forms/PersonForm.vue'
import MilitaryForm from '../forms/MilitaryForm.vue'

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    PhotoPreview,
    PersonCard,
    EducationForm,
    WeddingForm,
    PersonForm,
    MilitaryForm
  },
  data () {
    return {
      person: {
        id: 'gi6437tf63i4ftfo43f',
        secondName: 'Иванов',
        firstName: 'Иван',
        patronymic: 'Иванович',
        birth_date: '01.01.2000',
        die_date: '',
        gender: 'male',
        children: ['y3g46yf34fy636b', '3345fg35yg34f3f46'],
        biography: 'Родился в ...',
        activity: 'Бухгалтер',
        photo: '/pictures/ivan.jpg'
      },
      wedding: {
        partner: {
          id: '1',
          name: 'Ivan',
          second_name: 'Ivanov'
        },
        date_start: '01.01.2024',
        date_end: '01.02.2024'
      },
      education: {
        type: 'Бакалавриат',
        level: 'Высшее',
        startDate: '01.09.2019',
        endDate: '31.08.2023',
        institutionName: 'ВГУ',
        institutionCity: 'Воронеж'
      },
      military: {
        type: 'Контракт',
        rank: 'Рядовой',
        date_start: '01.01.2024',
        date_end: '01.03.2025',
        description: 'Служил в мото-стрелковой дивизии под Калининградом'
      }
    }
  }
}
</script>
