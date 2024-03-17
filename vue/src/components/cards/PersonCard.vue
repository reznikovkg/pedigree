<template>
  <div class="person-card">
    <div>
      <PhotoPreview size="large" :photo="photo"/>
    </div>
    <div>
      <h1 id="info-section">{{ fullName }}</h1>
      <span class="person-card__dates">{{ birthDate }}</span>
      <span v-if="dieDate" class="person-card__dates"> - {{ dieDate }}</span>

      <h2 id="parents-section">Родители</h2>
      <div class="person-card__information-text">
        <RelateButton :person="person" relate="parent" />
      </div>

      <h2 id="childs-section">Дети</h2>
      <div class="person-card__information-text">
        <div v-if="children && children.length > 0">
          <RelateButton v-for="child in children" :key="child.id" :person="child" relate="child" />
        </div>
        <p v-else>Нет детей</p>
      </div>

      <h2 id="activity-section">Род деятельности</h2>
      <div class="person-card__information-text">
        {{ activity }}
      </div>

      <h2 id="biography-section">Биография</h2>
      <div class="person-card__information-text">
        {{ biography }}
      </div>

      <h2 id="weddings-section">Брачные союзы</h2>
      <WeddingsList
        v-if="person.weddings && person.weddings.length > 0"
        :weddings="person.weddings"
      />
      <div v-else class="person-card__information-text">
        Информации нет
      </div>

      <h2 id="military-section">Военная служба</h2>
      <MilitaryList
        v-if="person.militaries && person.militaries.length > 0"
        :militaries="person.militaries"
      />
      <div v-else class="person-card__information-text">
        Информации нет
      </div>
    </div>
  </div>
</template>

<script>
import WeddingsList from '../parts/WeddingsList.vue';
import MilitaryList from '../parts/MilitaryList.vue';
import PhotoPreview from '../ui/PhotoPreview.vue';
import RelateButton from '@/components/ui/RelateButton.vue';
import { mapGetters } from 'vuex';
import { maskDatetime, maskFio, defaultImage } from '@/utils/mask';

export default {
  name: 'PersonCard',
  components: {
    WeddingsList,
    MilitaryList,
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
    ...mapGetters('persons',['getPersonsByIds']),
    ...mapGetters('settings', ['getAccess']),
    activity (){
      if (this.needHide){
        return 'Информация скрыта'
      }
      return this.person.activity || 'Информации нет'
    },
    biography (){
      if (this.needHide){
        return 'Информация скрыта'
      }
      return this.person.biography || 'Информации нет'
    },
    birthDate () {
      if (!this.person.birthDate){
        return null
      }
      if (!this.needHide){
        return this.person.birthDate
      }
      return maskDatetime(this.person.birthDate)
    },
    children () {
      if (!this.person.children){
        return []
      }
      return this.getPersonsByIds(this.person.children);
    },
    dieDate () {
      if (!this.person.dieDate){
        return null
      }
      if (!this.needHide){
        return this.person.dieDate
      }
      return maskDatetime(this.person.dieDate)
    },
    fullName () {
      if (this.needHide){
        const maskedSecondName = maskFio(this.person.secondName)
        const maskedFirstName = maskFio(this.person.firstName)
        const maskedPatronymicName = maskFio(this.person.patronymicName)
        return `${ maskedSecondName } ${ maskedFirstName } ${ maskedPatronymicName }`
      }
      else {
        return `${ this.person.secondName } ${ this.person.firstName } ${ this.person.patronymicName }`
      }
    },
    needHide (){
      return this.person.access && this.getAccess
    },
    photo (){
      if (!this.needHide){
        return this.person.photo
      }
      return defaultImage
    }
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
