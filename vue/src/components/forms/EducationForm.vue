<template>
  <div class="education-form">
    <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text"  v-model="formData.type" placeholder="Тип">
          </div>
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text"  v-model="formData.level" placeholder="Уровень">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text"  v-model="formData.startDate" placeholder="Дата начала обучения">
          </div>
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text" v-model="formData.endDate" placeholder="Дата завершения обучения">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text" v-model="formData.institutionName" placeholder="Название учреждения">
          </div>
          <div class="form-group">
            <input class="form-group--Educ-inp" type="text" v-model="formData.institutionCity" placeholder="Город учреждения">
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
      required: true
    }
  },

  data() {
    return {
      formData: {
        type: '',
        level: '',
        startDate: '',
        endDate: '',
        institutionName: '',
        institutionCity: ''
      }
    };
  },

  mounted() {
    this.formData = { ...this.education };
  },
  
  methods: {
    submitForm() {
      this.$emit('submit', this.formData);
    }
  }
};
</script>

 <style scoped lang = "less">
.education-form {
  max-width: 450px;
  height:150px;
  background-color:white;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-right:30px;
  margin-left:30px;
}

.form-group {
  width: 195px;
  height: 40px;
  margin-top:8px;

&--Educ-inp {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: rgba(0,0,0,0.6);
  background-color: rgba(0,0,0,0.04);
  height: 50%;
}

&--Educ-inp::placeholder {
  color: rgba(0,0,0,0.35);
  font-weight: bold;
    }
}
</style>