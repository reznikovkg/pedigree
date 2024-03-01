<template>
  <form class="wedding-form">
    <div class="wedding-form__person">
      <ElSelect
      v-model="partner"
      class="wedding-form__inp"
      placeholder="Выберите партнёра">
        <ElOption
          v-for="person in filteredPersonsList"
          :key="person.id"
          :label="person.name"
          :value="person">
        </ElOption>
      </ElSelect>
    </div>
    <div class="wedding-form__date-start">
      <ElInput
        v-model="date_start"
        class="wedding-form__inp"
        type="text"
        placeholder="Дата свадьбы"
      />
    </div>
    <div class="wedding-form__date-end">
      <ElInput
        v-model="date_end"
        class="wedding-form__inp"
        type="text"
        placeholder="Дата развода"
      />
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WeddingForm',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    persons: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      partner: null
    }
  },
  computed: {
    ...mapGetters('persons',['filteredPersons']),
    filteredPersonsList() {
      return this.filteredPersons(this.value.partner.gender, this.value.date_start, this.value.date_end)
    },
    date_start: {
      get () {
        return this.value.date_start
      },
      set (value) {
        this.emitFormData({ date_start: value })
      }
    },
    date_end: {
      get () {
        return this.value.date_end
      },
      set (value) {
        this.emitFormData({ date_end: value })
      }
    }
  },
  methods: {
    emitFormData (param) {
      this.$emit('change', {
        ...this.value,
        ...param,
      })
    }
  }
}
</script>

<style lang="less">
.wedding-form__inp {
  border: 1px solid #8d8d8d;
  color: #b4b4b4;
  border-radius: 6px;

  & .el-input__inner {
    font-weight: 500;
    font-size: 18px;
  }

  & .el-textarea__inner {
    font-weight: 500;
    font-size: 18px;
  }
}
</style>

<style scoped lang="less">
.wedding-form {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  &__person {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__date-start {
    grid-area: 2 / 1 / 3 / 2;
  }

  &__date-end {
    grid-area: 2 / 2 / 3 / 2;
  }
}
</style>
