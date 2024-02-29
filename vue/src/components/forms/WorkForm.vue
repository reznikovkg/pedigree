<template>
  <div class="work-page">
    <div>
      <ElInput
        v-model="formData.countryAndCity"
        type="text"
        placeholder="Страна, город"
      />
    </div> 
    <div>
      <ElInput
        v-model="formData.company"
        type="text"
        placeholder="Организация"
      />
    </div>
    <div>  
      <ElInput
        v-model="formData.startDate"
        type="text"
        placeholder="Дата начала"
      />
    </div> 
    <div> 
      <ElInput
        v-model="formData.endDate"
        type="text"
        placeholder="Дата завершения"
      />
    </div>
    <div class="work-page__position">
      <ElInput
        v-model="formData.position"
        type="textarea"
        placeholder="Должность"
      />
     </div>
     <div class="work-page__description"> 
      <ElInput
        v-model="formData.description"
        type="textarea"
        placeholder="Описание"
      />
    </div> 
  </div>
    
</template>

<script>
export default {
  name: "WorkForm",
  props: {
    workData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {
        countryAndCity: "",
        company: "",
        startDate: "",
        endDate: "",
        position: "",
        description: ""
      }
    };
  },
  mounted() {
    this.formData = { ...this.workData };
  },
};
</script>

<style scoped lang="less">
.work-page {
  width: 450px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 8px;

  &__position {
    grid-area: 3 / 1 / 4 / 3;
  }

  &__description{
    grid-area: 4 / 1 / 4 / 3;
  }
}
</style>