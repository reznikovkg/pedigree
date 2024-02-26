<template>
    <div>
      <h3>Выберите поле для редактирования:</h3>
      <select :value="propertyToEdit" @change="changeSelectProperty($event.target.value)">
        <option value="firstName">Имя</option>
        <option value="secondName">Фамилия</option>
        <option value="patronomyc">Отчетство</option>
        <option value="birth_date">Дата рождения</option>
        <option value="die_date">Дата смерти</option>
        <option value="gender">Пол</option>
        <option value="biography">Биография</option>
        <option value="activity">Род деятельности</option>
        <option value="photo">Картинка</option>
      </select>
      <input
      v-if="propertyToEdit === 'photo'"
      @change="changePropertyValue"
      type="file"
      accept="image/*"
      />
      <input
        v-else-if="propertyToEdit === 'birth_date' || propertyToEdit === 'die_date'"
        :value="propertyValue"
        type="date"
        @change="changePropertyValue"
      />
      <input
        v-else-if="propertyToEdit"
        :value="propertyValue"
        @change="changePropertyValue"
        placeholder="Введите новое значение"
      />
      <button @click="_editPerson">сохранить</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import { addPhoto, formatDateStr } from "./utils";
  export default {
    name: "PersonEdit",
    components: {},
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        propertyToEdit: "",
        propertyValue: null
      };
    },
    methods: {
      _editPerson() {
        if (this.propertyToEdit && this.propertyValue) {
          this.editPerson({ id: this.id, [this.propertyToEdit]: this.propertyValue });
        }
      },
      changePropertyValue(e) {
        if (this.propertyToEdit === "photo") {
          addPhoto(e, (resultPhoto) => {
            this.propertyValue = resultPhoto;
          });
        } else if (this.propertyValue === "birth_date" || this.propertyValue === "die_date") {
          this.propertyValue = formatDateStr(e.target.value);
        } else {
          this.propertyValue = e.target.value;
        }
      },
      changeSelectProperty(property) {
        this.propertyToEdit = property;
        this.propertyValue = null;
      },
      ...mapActions("persons", ["editPerson"])
    }
  };
  </script>
  <style lang="less" scoped>
  .person-add {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  </style>