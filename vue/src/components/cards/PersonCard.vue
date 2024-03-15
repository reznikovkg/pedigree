<template>
  <div class="person-card">
    <div>
      <PhotoPreview size="large" :photo="Photo"/>
    </div>
    <div>
      <h1>{{ fullName }}</h1>
      <span class="person-card__dates">{{ birthDate }}</span>
      <span v-if="dieDate" class="person-card__dates"> - {{ dieDate }}</span>

      <h2>Родители</h2>
      <div class="person-card__information-text">
        <RelateButton :person="person" relate="parent"/>
      </div>

      <h2>Дети </h2>
      <div class="person-card__information-text">
        <RelateButton :person="person" relate="child"/>
      </div>

      <h2>Род деятельности</h2>
      <div class="person-card__information-text">
        {{ activity }}
      </div>

      <h2>Биография</h2>
      <div class="person-card__information-text">
        {{ biography }}
      </div>

      <h2>Брачные союзы</h2>
      <WeddingsList
        v-if="person.weddings && person.weddings.length > 0"
        :weddings="person.weddings"
      />
      <div v-else class="person-card__information-text">
        Информации нет
      </div>
    </div>
  </div>
</template>

<script>
import WeddingsList from '../parts/WeddingsList.vue';
import PhotoPreview from '../ui/PhotoPreview.vue';
import RelateButton from '@/components/ui/RelateButton.vue';
import { mapGetters } from 'vuex';
import { mask_datetime, mask_fio, default_image } from '@/utils/mask';

export default {
  name: 'PersonCard',
  components: {
    WeddingsList,
    PhotoPreview,
    RelateButton
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('settings', ['getAccess']),
    needHide(){
      return this.person.access && this.getAccess
    },
    Photo(){
      if (!this.needHide){
        return this.person.photo
      }
      return default_image
    },
    fullName () {
      if (this.needHide){
        const maskedSecondName = mask_fio(this.person.secondName)
        const maskedFirstName = mask_fio(this.person.firstName)
        const maskedPatronymicName = mask_fio(this.person.patronymicName)
        return `${ maskedSecondName } ${ maskedFirstName } ${ maskedPatronymicName }`
      }
      else {
        return `${ this.person.secondName } ${ this.person.firstName } ${ this.person.patronymicName }`
      }
    },
    birthDate() {
      if (!this.person.birth_date){
        return null
      }
      if (!this.needHide){
        return this.person.birth_date
      }
      return mask_datetime(this.person.birth_date)
    },
    dieDate () {
      if (!this.person.die_date){
        return null
      }
      if (!this.needHide){
        return this.person.die_date
      }
      return mask_datetime(this.person.die_date)
    },
    activity(){
      if (this.needHide){
        return 'Информация скрыта'
      }
      return this.person.activity || 'Информации нет'
    },
    biography(){
      if (this.needHide){
        return 'Информация скрыта'
      }
      return this.person.biography || 'Информации нет'
    },
  }
}
</script>

<style scoped lang="less">
.person-card {
  display: flex;
  gap: 15px;

  &__dates {
    font-size: 12px;
    color: grey;
    padding-bottom: 20px;
  }

  &__information-text {
    font-weight: 500;
    font-size: 10px;
    padding-bottom: 20px;
    color: black;
  }
}
</style>
