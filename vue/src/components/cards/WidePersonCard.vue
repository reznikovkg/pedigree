<template>
    <div class="person-widecard">
      <div>
        <PhotoPreview size="small"/>
      </div>
      <div class="person-widecard--description">
        <div class="person-widecard--description__fullname">
          <h1>{{ fullName }}</h1>
          <span class="dot"></span>
        </div>
        <div class="person-widecard--description__dates">
          <span>{{ person.birth_date }}</span>
          <span v-if="person.die_date"> - {{ person.die_date }}</span>
        </div>
        <span class="person-widecard--description__id">id: {{ person.id }}</span>
      </div>
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
    &--description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-weight: 600;
      color: gray;
      &__fullname {
        display: flex;
        align-items: center;
        gap: 10px;
        & .dot {
          width: 15px;
          height: 15px;
          margin-bottom: 8px;
          border-radius: 50%;
          background: #adffb4;
        }
      }
      &__dates {
        display: flex;
        font-size: 12px;
      }
    }
  }
</style>
  