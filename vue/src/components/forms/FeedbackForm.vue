<template>
  <div class="custom-form">
    <ElInput
      v-model="firstName"
      class="custom-form__input"
      type="text"
      placeholder="Ваше имя"
    />
    <ElInput
      v-model="secondName"
      class="custom-form__input"
      type="text"
      placeholder="Ваша фамилия"
    />
    <ElInput
      v-model="phoneNumber"
      class="custom-form__input"
      type="text"
      placeholder="Номер телефона"
    />
    <ElInput
      v-model="email"
      class="custom-form__input"
      type="text"
      placeholder="E-mail"
    />
    <div class="custom-form__full-width">
      <ElInput
        v-model="message"
        class="custom-form__input"
        type="textarea"
        placeholder="Сообщение"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    firstName: {
      get () {
        return this.value.firstName
      },
      set (value) {
        this.emitFormData({ firstName: value })
      }
    },
    secondName: {
      get () {
        return this.value.secondName
      },
      set (value) {
        this.emitFormData({ secondName: value })
      }
    },
    phoneNumber: {
      get () {
        return this.value.phoneNumber
      },
      set (value) {
        this.emitFormData({ phoneNumber: value })
      }
    },
    email: {
      get () {
        return this.value.email
      },
      set (value) {
        this.emitFormData({ email: value })
      }
    },
    message: {
      get () {
        return this.value.message
      },
      set (value) {
        this.emitFormData({ message: value })
      }
    },
  },
  methods: {
    emitFormData (param) {
      this.$emit('change', {
        ...this.value,
        ...param
      })
    },
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
</style>
