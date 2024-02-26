<template>
    <PageLayout>
      <router-link :to="PERSONS_ROUTE">Go back</router-link>
      <div class="person">
      <div class="person__wrapper-img">
        <img class="person__img" :src="personData.photo" alt="person photo" />
        <button @click="_deletePerson(personData.id)" class="person__btn">Удалить</button>
        <button @click="isEditing = !isEditing" class="person__btn">
          {{ isEditing ? "Отмена" : "Редактировать" }}
        </button>
        <PersonEdit :id="personData.id" v-if="isEditing" />
      </div>
      <div class="person__container">
        <div class="persons__sub-container">
          <h1 class="person__name">
            {{ personData.firstName }} {{ personData.secondName }} {{ personData.patronomyc }}
          </h1>
          <p class="person__dates">
            {{ personData.birth_date }} {{ personData.die_date ? "- " + personData.die_date : "" }}
          </p>
          <div class="person__section">
            <p class="person__title">Дети</p>
            <div class="person__children">
              {{ personData.children?.[0] }}
            </div>
          </div>
          <div class="person__section">
            <p class="person__title">Род деятельности</p>
            <p>{{ personData.activity }}</p>
          </div>
          <div class="person__section">
            <p class="person__title">Биография</p>
            <p>{{ personData.biography }}</p>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  </template>
  
  <script>
  import PageLayout from "../../components/parts/PageLayout.vue";
  import { PERSONS_ROUTE } from "@/router/routes";
  import { mapActions, mapGetters } from "vuex";
  import PersonEdit from "@/components/personInputs/PersonEdit.vue";
  export default {
    name: "SinglePerson",
    components: {
      PersonEdit,
      PageLayout
    },
    data() {
      return {
        PERSONS_ROUTE: PERSONS_ROUTE,
        isEditing: false
      };
    },

    computed: {
      personData() {
        return this.getPersonById(this.$route.params.id);
      },
      ...mapGetters("persons", ["getAllPersons", "getPersonById"])
    },
    methods: {
    _deletePerson(id) {
      this.deletePerson(id);
      this.$router.push(`${PERSONS_ROUTE}`);
    },
    ...mapActions("persons", ["deletePerson"])
  }

  };
  </script>
  
  <style lang="less">
  .person {
    margin-top: @indentHuge;
    display: flex;
  align-items: flex-start;
  gap: @indentMedium;

  &__img {
    width: 100%;
    }

  &__btn {
    margin: 10px 10px 0 0;
    }

  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    }

  &__wrapper-img {
    width: fit-content;
    max-width: 400px;
    }

  &__dates {
    margin: 0;
    color: gray;
    font-size: 14px;
    }

  &__title {
    font-size: 20px;
    font-weight: 600;
    }
  }
  </style>