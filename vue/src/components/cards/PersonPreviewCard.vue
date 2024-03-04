<template>
  <div class="person-preview-card">
    <PhotoPreview class="person-preview-card__photo" size="middle" photo="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg" />
    <!-- <PhotoPreview v-if="person.photo" :photo="person.photo" size="middle"/> -->
    <div class="person-preview-card__information">
      <h2 class="person-preview-card__name">{{ person.secondName }}</h2>
      <h2 class="person-preview-card__name">{{ person.firstName }}</h2>
      <h2 class="person-preview-card__name">{{ person.patronymic }}</h2>

      <span class="person-preview-card__date">{{ person.birth_date }}</span>
      <span v-if="person.die_date" class="person-preview-card__date"> - {{ person.die_date }}</span>

      <div class="person-preview-card__person-id">id: {{ person.id }}</div>
    </div>
    <div class="person-preview-card__status-indicator" :style="{ backgroundColor: genderColor }"></div>
  </div>
</template>

<script>
import PhotoPreview from '../ui/PhotoPreview.vue'

export default {
  name: 'PersonPreviewCard',
  components: {
    PhotoPreview
  },
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genderColor() {
      return this.person.gender === 'FEMALE' || this.person.gender === 'female' ? '#ACFFE6' : '#ACFFB4';
    },
  },
}
</script>

<style scoped lang="less">
.person-preview-card {
  border-radius: 24px;
  background-color: #f5f5f5;
  box-shadow: 1.5px 7px 5px 1.5px rgba(0, 0, 0, 0.1), -1.5px 7px 5px -1.5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  margin: 20px;
  width: 425px;
  height: 215px;
  padding-left: 25px;

  &__information {
    margin-right: 55px;
  }

  &__photo {
    margin-top: 5px;
    margin-right: 20px;
  }

  &__name {
    font-family: 'Inter', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #000000;
  }

  &__date {
    font-family: 'Inter', sans-serif;
    color: #757575;
    font-weight: 700;
    white-space: nowrap;
  }

  &__person-id {
    font-family: 'Inter', sans-serif;
    margin-top: 34px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #757575;
  }

  &__status-indicator {
    width: 25px;
    height: 25px;
    border-radius: 24px;
    position: absolute;
    top: 25px;
    right: 25px;
  }
}
</style>
