<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <ElButton type="primary">Кнопка</ElButton>
      <PersonCard :person="person" />
      <PhotoPreview size="large" photo=" " />
      <EducationForm v-model="education" />
      <WeddingForm v-model="wedding" :persons="persons" />
      <PersonForm :person="person" />
      <MilitaryForm :military="military"/>
      <PopOver>
        <template v-slot:button>
          <div>Отчество: Фамилия И. О.</div>
        </template>
        <template v-slot:popover>
          <div>Фамилия Имя Отчество</div>
          <div>01.01.1920 - 01.01.2020</div>
          <div>id: 100</div>
        </template>
      </PopOver>
    </section>
    <section class="home-page__section">
      <button @click="openHelpModal" class="home-page__button">Open modal</button>
      <WorkForm v-model="workData"/>
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
import PopOver from "@/components/ui/PopOver"
import { mapGetters } from 'vuex'
import WorkForm from '../forms/WorkForm.vue'

export default {
  mixins: [helpModal],
  name: 'HomePage',
  components: {
    PageLayout,
    PhotoPreview,
    PersonCard,
    EducationForm,
    WeddingForm,
    PersonForm,
    MilitaryForm,
    PopOver,
    WorkForm
  },
  computed: {
    ...mapGetters('persons', [
      'filteredPersons'
    ]),
    persons() {
      const customFilter = (person) => {
        const partnerGender = this.person.gender === 'male' ? 'female' : 'male'
        const birthDate = new Date(this.person.birthDate)
        const deathDate = new Date(this.person.dieDate)
        return (
          person.gender !== partnerGender &&
          (!person.dieDate || new Date(person.dieDate) >birthDate) &&
          (!person.birthDate|| new Date(person.birthDate) < deathDate)
        )
      }
      return this.filteredPersons(customFilter) || []
    }
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
        photo: '/pictures/ivan.jpg',
        weddingsData: [
          {
            person: { name: 'Иванова И.И.' },
            date_start: '2021',
            date_end: ''
          },
          {
            person: { name: 'Петрова П.И.' },
            date_start: '2010',
            date_end: '2020'
          }
        ]
      },
      wedding: {
        partner: {
          id: '1',
          name: 'Ivan',
          second_name: 'Ivanov'
        },
        date_start: '01.01.2020',
        date_end: '01.02.2022'
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
      },
      workData: {
        place: "Россия, Воронеж",
        organization: "RedCollar",
        startDate: "01.01.2023",
        endDate: "31.12.2023",
        position: "Младший инженер-программист",
        description: "Клёвый чел"
      }
    }
  }
}
</script>