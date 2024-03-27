<template>
  <div class="custom-card">
    <div class="custom-card__header">
      {{ education.name }}
    </div>
    <div class="custom-card__date">
      {{ formatDate(education.startDate) }} - {{ education.endDate ? formatDate(education.endDate) : 'настоящее время' }}
    </div>
    
    <div class="custom-card__type">
      Тип: {{ education.type }}
    </div>
    <div class="custom-card__type">
      Уровень образования: {{ education.level }}
    </div>
    <div class="custom-card__type">
      Город: {{ education.city }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationCard',
  props: {
    education: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      // Функция для форматирования даты, если необходимо
      return date;
    }
  }
}
</script>

<style scoped lang="less">
@base-color: #333;
@light-color: #666;
@background-color: #fff;
@font-family: 'Inter', sans-serif;

.education-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: @background-color;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px;
  font-family: @font-family;

  &__header {
    margin-bottom: 15px;
  }

  &__institution {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  &__dates {
    font-size: 14px;
    color: @light-color;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__detail {
    font-size: 16px;
    color: @base-color;
  }

  &__detail-label {
    font-weight: 600;
  }
}
</style>