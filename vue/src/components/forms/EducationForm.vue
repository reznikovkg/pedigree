<template>
  <div class="education-form">
    <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="type" v-model="formData.type" placeholder="Тип">
          </div>
          <div class="form-group">
            <input type="text" id="level" v-model="formData.level" placeholder="Уровень">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="startDate" v-model="formData.startDate" placeholder="Дата начала обучения">
          </div>
          <div class="form-group">
            <input type="text" id="endDate" v-model="formData.endDate" placeholder="Дата завершения обучения">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="institutionName" v-model="formData.institutionName" placeholder="Название учреждения">
          </div>
          <div class="form-group">
            <input type="text" id="institutionCity" v-model="formData.institutionCity" placeholder="Город учреждения">
          </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EducationForm',
  props: {
    education: {
      type: Object,
      default: () => ({ 
        type: '',
        level: '',
        startDate: '',
        endDate: '',
        institutionName: '',
        institutionCity: ''
      })
    }
  },
  data() {
    return {
      formData: { ...this.education }
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.formData);
    }
  }
};
</script>

<style scoped>

.education-form {
  max-width: 400px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.form-group {
  width: 47%;
  height: 40px;
}


input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: rgba(0,0,0,0.6);
  background-color: rgba(0,0,0,0.04);
  height: 50%;
  font-weight: bold;
}

input[type="text"]::placeholder {
  color: rgba(0,0,0,0.35);
}

</style>