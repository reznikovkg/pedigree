<template>
    <div>
      <h3>Добавить нового человека:</h3>
      <div class="person-add">
        <input
          :value="dataToAdd.firstName"
          @change="changeDataToAdd('firstName', $event.target.value)"
          placeholder="name"
        />
        <input
          :value="dataToAdd.secondName"
          @change="changeDataToAdd('secondName', $event.target.value)"
          placeholder="surname"
        />
        <input
          :value="dataToAdd.patronomyc"
          @change="changeDataToAdd('patronomyc', $event.target.value)"
          placeholder="patronomyc"
        />
        <input
          :value="dataToAdd.birth_date"
          @change="changeDataToAdd('birth_date', $event.target.value)"
          type="date"
          placeholder="birth date"
        />
        <input
          :value="dataToAdd.die_date"
          @change="changeDataToAdd('die_date', $event.target.value)"
          type="date"
          placeholder="die date"
        />
        <select @change="changeDataToAdd('gender', $event.target.value)" :value="dataToAdd.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          @change="changeDataToAdd('biography', $event.target.value)"
          :value="dataToAdd.biography"
          placeholder="biography"
        />
        <input
          @change="changeDataToAdd('activity', $event.target.value)"
          :value="dataToAdd.activity"
          placeholder="activity"
        />
        <input @change="changePhotoToAdd" type="file" accept="image/*" 
        />
        <div>
          <button @click="_addPerson">add</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import { addPhoto, formatDateStr } from "./utils";
  export default {
    name: "PersonAdd",
    components: {},
    data() {
      return {
        dataToAdd: {
          firstName: "",
          secondName: "",
          patronomyc: "",
          birth_date: "",
          die_date: "",
          gender: "",
          biography: "",
          activity: "",
          photo:""
        }
      };
    },
    methods: {
      _addPerson() {
        const {
          firstName,
          secondName,
          patronomyc,
          birth_date,
          die_date,
          gender,
          biography,
          activity,
          photo
        } = this.dataToAdd;
        if (!firstName || !secondName || !patronomyc || !birth_date || !gender) {
          return;
        }
        const formattedBirthDate = formatDateStr(birth_date);
        const formattedDieDate = formatDateStr(die_date);
        this.addPerson({
          firstName,
          secondName,
          patronomyc,
          birth_date: formattedBirthDate,
          die_date: formattedDieDate,
          gender,
          biography,
          activity,
          photo
        });
      },
      changePhotoToAdd(e) {
      addPhoto(e, (resultPhoto) => {
        this.dataToAdd = { ...this.dataToAdd, photo: resultPhoto };
      });
    },
      changeDataToAdd(property, newValue) {
        this.dataToAdd = { ...this.dataToAdd, [property]: newValue };
      },
      ...mapActions("persons", ["addPerson"])
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