<template>
  <div class="person-card">
    <div>
      <PhotoPreview size="large" />
    </div>
    <div>
      <h1 id="info-section">{{ fullName }}</h1>
      <span class="person-card__dates">{{ person.birth_Date }}</span>
      <span class="person-card__dates">{{ person.birthDate }}</span>
      <span v-if="person.dieDate" class="person-card__dates"> - {{ person.dieDate }}</span>

      <h2 id="parents-section">Родители</h2>
      <div class="person-card__information-text">
        <RelateButton :person="person" relate="parent" />
      </div>

      <h2 id="childs-section">Дети</h2>
      <div class="person-card__information-text">
        <div v-if="person.children && person.children.length > 0">
          <RelateButton 
            v-for="child in children" 
            :key="child.id" 
            :person="child" 
            relate="child" 
          />
        </div>
        <p v-else>Нет детей</p>
      </div>

      <h2 id="activity-section">Род деятельности</h2>
      <div class="person-card__information-text">
        {{ person.activity || 'Информации нет' }}
      </div>

      <h2 id="biography-section">Биография</h2>
      <div class="person-card__information-text">
        {{ person.biography || 'Информации нет' }}
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
import WeddingsList from '../parts/WeddingsList.vue'
import MilitaryList from '../parts/MilitaryList.vue'
import PhotoPreview from '../ui/PhotoPreview.vue'
import RelateButton from '@/components/ui/RelateButton.vue'
import { mapGetters } from 'vuex'

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
    fullName () {
      return `${ this.person.secondName } ${ this.person.firstName } ${ this.person.patronymicName }`
    },
    children () {
      return this.getPersonsByIds(this.person.children)
    }
  },
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
