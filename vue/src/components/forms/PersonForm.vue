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
      v-model="patronymicName"
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
      v-model="birthDate"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата рождения"
    />
    <ElDatePicker
      v-model="dieDate"
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
    <div class="custom-form__full-width">
      <ElSelect
        v-model="access"
        class="custom-form__input"
        placeholder="Скрывание">
        <ElOption
          label="Скрывать"
          value=true
        />
        <ElOption
          label="Не скрывать"
          value=false
        />
      </ElSelect>
    </div>
    <h2>Военная служба</h2>
    <div 
      class="custom-form__full-width" 
      v-for="(military, index) in value.militaries" 
      :key="index"
    >
      <div class ="person-page__header-wrapper">
      <h3>Военная служба {{index + 1}}</h3>
        <button class="person-page__btn-close" @click="() => removeMilitaryForm(index)">
          ✖
        </button>
      </div>
      <MilitaryForm
        :value="military"
        class="custom-form__input"
        @change="(military) => setMilitaryForm(military, index)"
      />
    </div>
    <div class ="custom-form__full-width person-page__right-wrapper">
      <SimpleButton type="primary" @click="() => addMilitaryForm()">
        Добавить
      </SimpleButton >
    </div>
  </div>
</template>

<script>
import MilitaryForm from '../forms/MilitaryForm.vue'
import SimpleButton from '../ui/SimpleButton.vue'

export default {
  name: 'PersonForm',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    MilitaryForm,
    SimpleButton
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
    patronymicName: {
      get () {
        return this.value.patronymicName
      },
      set (value) {
        this.emitFormData({ patronymicName: value })
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
    birthDate: {
      get () {
        return this.value.birthDate
      },
      set (value) {
        this.emitFormData({ birthDate: value })
      }
    },
    dieDate: {
      get () {
        return this.value.dieDate
      },
      set (value) {
        this.emitFormData({ dieDate: value })
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
    },
    access: {
      get(){
        return this.value.access
      },
      set(value){
        this.emitFormData({
          access: value
        })
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
    setMilitaryForm(updatedMilitary, index) {
      const newValue = { ...this.value }
      newValue.militaries[index] = updatedMilitary
      newValue.militaries = [...newValue.militaries]
      this.$emit('change', newValue)
    },
    addMilitaryForm() {
      const newValue = { ...this.value }
      newValue.militaries.push({
        type: '',
        rank: '',
        startDate: '',
        endDate: '',
        description: ''
      })
      this.$emit('change', newValue)
    },
    removeMilitaryForm(index) {
      const newValue = { ...this.value }
      newValue.militaries.splice(index, 1)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style scoped lang="less">
@media (max-width: 720px) {
  .custom-form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
} 

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
  }

  &__header-wrapper {
    display: grid;
    grid-template-columns: auto max-content;
  }

  &__right-wrapper {
    text-align: right;
  }
}
</style>
 