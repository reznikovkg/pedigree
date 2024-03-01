<template>
  <div class="relate-button">
    <button
      class="relate-button__text"
      :class="{ 'relate-button__male': isMale, 'relate-button__female': !isMale }"
      @click="goToPerson"
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
      required: true,
      validator: value => ['child', 'parent'].includes(value)
    }
  },
  computed: {
    isMale() {
      return this.person && this.person.gender === 'male';
    },
    formatName() {
      if (this.person) {
        return `${this.person.secondName} ${this.person.firstName[0]}. ${this.person.patronymic[0]}.`;
      }
      return 'Фамилия И. О.';
    },
    buttonText() {
      if (this.person) {
        if (this.relate === 'parent') {
          return this.isMale ? `Отец: ${this.formatName}` : `Мать: ${this.formatName}`;
        } else if (this.relate === 'child') {
          return `${this.formatName}`;
        }
      } else {
        return this.relate === 'parent' ? 'Родитель: Фамилия И. О.' : 'Фамилия И. О.';
      }
      return '';
    }
  }
};
</script>

<style scoped lang="less">
.relate-button {
  display: inline-block;
  margin-right: 10px;
}

.relate-button__text {
  border: none;
  padding: 10px 20px;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.relate-button__male {
  background-color: #adffb4;
}

.relate-button__female {
  background-color: #adffe6;
}
</style>
