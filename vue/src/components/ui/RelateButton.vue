<template>
  <div class="relate-button">
    <button
      class="relate-button__text"
      :class="{ 'relate-button__male': isMale, 'relate-button__female': !isMale }"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'RelateButton',
  props: {
    person: {
      type: Object,
      required: true
    },
    relate: {
      type: String,
      default: 'child',
      validator: value => ['child', 'parent'].includes(value)
    }
  },
  computed: {
    isMale() {
      return this.person.gender === 'male';
    },
    formatName() {
      return `${this.person.secondName} ${this.person.firstName[0]}. ${this.person.patronymic[0]}.`;
    },
    buttonText() {
      if (this.relate === 'parent') {
        return this.isMale ? `Отец: ${this.formatName}` : `Мать: ${this.formatName}`;
      } else if (this.relate === 'child') {
        return `${this.formatName}`;
      } else {
        return this.relate === 'parent' ? 'Родитель: Фамилия И. О.' : 'Фамилия И. О.';
      }
    }
  }
};
</script>

<style scoped lang="less">
.relate-button {
  display: inline-block;
  margin-right: 10px;

  &__text {
  border: none;
  padding: 10px 20px;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  }

  &__male {
    background-color: #adffb4;
  }

  &__female {
    background-color: #adffe6;
  }
}
</style>
