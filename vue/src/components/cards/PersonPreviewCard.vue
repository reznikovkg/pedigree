<template>
<div class="person-preview-card">
  <div class="person-preview-card__person-info">
   <h2 class="person-preview-card__person-info__second-name">{{ person.secondName }}</h2>
   <h2 class="person-preview-card__person-info__first-name">{{ person.firstName }}</h2>
   <h2 class="person-preview-card__person-info__patronymic">{{ person.patronymic }}</h2>
   <span class="person-preview-card__person-info__birth-date">{{ person.birthDate }}</span>
   <span v-if="person.die_date" class="person-preview-card__person-info__birth-date">- {{ person.die_date}}</span>
   <span class="person-preview-card__person-info__person-id" style="display: block;">id: {{ person.id }}</span>
  </div>
  <div class="person-preview-card__person-info__status-indicator"></div>
</div>
</template>

<script>
export default {
  name: 'PersonPreviewCard',
  props: {
   person: {
    type: Object,
    required: true,
   },
  },
};
</script>

<style scoped lang = "less">
.person-preview-card {
  background-color: white;
  border-radius: 24px;
  background-color: #f5f5f5;
  box-shadow: 1.5px 7px 5px 1.5px rgba(0, 0, 0, 0.1), -1.5px 7px 5px -1.5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  position: relative;
  margin: 1em;
  width: 425px;
  height: 215px;
  &__person-info {
    &__second-name,
    &__first-name,
    &__patronymic,
    &__birth-date,
    &__person-id {
     margin-left: 5%;
     font-family: 'Inter', sans-serif;
    }
    &__second-name {
    margin-top: 5%;
    margin-bottom: 5%;
    color: black;
    }
    &__first-name {
     margin-bottom: 5%;
     color: black;
    }
    &__patronymic {
     margin-bottom: 5%;
     color: black;
    }
    &__birth-date {
    color: rgb(117, 117, 117);
    font-weight: bold;
    white-space: nowrap;
    }
    &__person-id {
       margin-top: 17%;
       margin-bottom: 10%;
       font-weight: bold;
       color: rgb(117, 117, 117);
    }
  }
  &__status-indicator {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-top: 3%;
    margin-right: 3%;
    background-color: rgb(173, 255, 180);
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

</style>
