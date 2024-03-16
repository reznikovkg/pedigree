<template>
  <div class="person-widecard">
    <div>
      <PhotoPreview size="small"/>
    </div>
    <div class="person-widecard__description">
      <div class="person-widecard__description__fullname">
        <h1>{{ fullName }}</h1>
      </div>
      <div class="person-widecard__description__dates">
        <span>{{ person.birth_date }}</span>
        <span v-if="person.die_date"> - {{ person.die_date }}</span>
      </div>
      <span class="person-widecard__description__id">id: {{ person.id }}</span>
    </div>
    <div class="person-widecard__status-indicator" :class="genderClass"></div>
  </div>
</template>
  
<script>
import PhotoPreview from '../ui/PhotoPreview.vue';

export default {
  name: 'WidePersonCard',
  components: {
    PhotoPreview,
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName () {
      return `${ this.person.secondName } ${ this.person.firstName } ${ this.person.patronymic }`
    },
    genderClass () {
      return `person-widecard__status-indicator__${this.person.gender.toLowerCase()}`;
    }
  }
}
</script>
  
<style scoped lang="less">
.person-widecard {
  display: flex;
  gap: 15px;
  background: #f5f5f5;
  border-radius: 24px;
  padding: 15px;
  box-shadow:  8px 8px 2px #d0d0d0, -8px -8px 2px #ffffff2d;
  &__status-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 20px;
    &__female {
      background-color: #ACFFE6;
    }
    &__male {
      background-color: #ACFFB4;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: 600;
    color: gray;
    &__fullname {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__dates {
      display: flex;
      font-size: 12px;
    }
  }
}
</style>
  