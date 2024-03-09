<template>
  <div class="custom-form">
    <ElInput
      v-model="secondName"
      class="custom-form__input"
      type="text"
      placeholder="Фамилия"
    />
    <ElInput
      v-model="firstName"
      class="custom-form__input"
      type="text"
      placeholder="Имя"
    />
    <ElInput
      v-model="patronymic"
      class="custom-form__input"
      type="text"
      placeholder="Отчество"
    />
    <ElInput
      v-model="gender"
      class="custom-form__input"
      type="text"
      placeholder="Пол"
    />
    <ElDatePicker
      v-model="birth_date"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата рождения"
    />
    <ElDatePicker
      v-model="die_date"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата смерти"
    />
    <div class="custom-form__full-width">
      <ElInput
        v-model="activity"
        class="custom-form__input"
        type="textarea"
        placeholder="Род деятельности"
      />
    </div>
    <div class="custom-form__full-width">
      <ElInput
        v-model="biography"
        class="custom-form__input"
        type="textarea"
        placeholder="Биография"
      />
    </div>
    <div 
      class="custom-form__full-width" 
      v-for="(military, index) in value.military" 
      :key="index"
    >
      <h2>Военная служба {{index + 1}}</h2>
      <div class ="person-page__right-wrapper">
        <button @click="() => removeForm(index)" class="person-page__btn-close ">
          ✖
        </button>
      </div>
      <MilitaryForm
        :value="military"
        class="custom-form__input"
        @change="(military) => setForm(military, index)"
      />
    </div>
    <div class ="custom-form__full-width person-page__right-wrapper">
      <SimpleButton  @click="() => addForm()" 
        class="person-page__btn"
        type="info"
      >
        Добавить
      </SimpleButton >
    </div>
  </div>
</template>

<script>
import MilitaryForm from '../forms/MilitaryForm.vue'


export default {
  name: 'PersonForm',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    MilitaryForm
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    secondName: {
      get () {
        return this.value.secondName
      },
      set (value) {
        this.emitFormData({ secondName: value })
      }
    },
    firstName: {
      get () {
        return this.value.firstName
      },
      set (value) {
        this.emitFormData({ firstName: value })
      }
    },
    patronymic: {
      get () {
        return this.value.patronymic
      },
      set (value) {
        this.emitFormData({ patronymic: value })
      }
    },
    gender: {
      get () {
        return this.value.gender
      },
      set (value) {
        this.emitFormData({ gender: value })
      }
    },
    birth_date: {
      get () {
        return this.value.birth_date
      },
      set (value) {
        this.emitFormData({ birth_date: value })
      }
    },
    die_date: {
      get () {
        return this.value.die_date
      },
      set (value) {
        this.emitFormData({ die_date: value })
      }
    },
    activity: {
      get () {
        return this.value.activity
      },
      set (value) {
        this.emitFormData({ activity: value })
      }
    },
    biography: {
      get () {
        return this.value.biography
      },
      set (value) {
        this.emitFormData({ biography: value })
      }
    }
  },
  methods: {
    emitFormData (param) {
      this.$emit('change', {
        ...this.value,
        ...param
      })
    },
    setForm(updatedMilitary, index) {
      const newValue = { ...this.value }
      newValue.military = [...newValue.military]
      newValue.military[index] = updatedMilitary
      this.$emit('change', newValue)
    },
    addForm() {
      const newValue = { ...this.value }
      newValue.military = [...newValue.military, {
        type: '',
        rank: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
      this.$emit('change', newValue)
    },
    removeForm(index) {
      const newValue = { ...this.value }
      newValue.military.splice(index, 1)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style scoped lang="less">
.person-page {
  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: aqua;
    color: black;
    font-weight: 600;
    cursor: pointer;
    margin-left: 0px;
    margin-bottom: 20px;
  }

  &__btn-close {
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
  }

  &__right-wrapper {
    text-align: right;
  }
}
</style>
 