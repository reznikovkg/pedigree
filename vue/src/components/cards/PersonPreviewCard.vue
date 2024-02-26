<template>
<div class="person-preview-card">
  <div class="person-preview-card__person-info">
    <h2 class="person-preview-card__person-info__name">{{ person.secondName }}</h2>
    <h2 class="person-preview-card__person-info__name">{{ person.firstName }}</h2>
    <h2 class="person-preview-card__person-info__name">{{ person.patronymic }}</h2>
    <span class="person-preview-card__person-info__date">{{ person.birthDate }}</span>
    <span v-if="person.die_date" class="person-preview-card__person-info__date" style="margin-left: 0;"> - {{person.die_date}}</span>
    <span class="person-preview-card__person-info__person-id" style="display: block;">id: {{ person.id }}</span>
  </div>
  <div class="person-preview-card__status-indicator"></div>
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

<style scoped lang="less">
.person-preview-card {
  background-color: white;
  border-radius: 24px;
  background-color: #f5f5f5;
  box-shadow: 1.5px 7px 5px 1.5px #0000001a, -1.5px 7px 5px -1.5px #00000033;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  position: relative;
  margin: 1em;
  width: 425px;
  height: 215px;
  &__person-info {
    &__name,
    &__patronymic,
    &__date,
    &__person-id {
      margin-left: 10px;
      font-family: 'Inter', sans-serif;
    }
    &__name {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #000000;
    }
    &__date {
      color: #757575;
      font-weight: bold;
      white-space: nowrap;
    }
    &__person-id {
       margin-top: 34px;
       margin-bottom: 20px;
       font-weight: bold;
       color: #757575;
    }
  }
  &__status-indicator {
    width: 25px;
    height: 25px;
    border-radius: 24px;
    margin-top: 14px;
    margin-right: 15px;
    background-color: #adffb4;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

</style>
