<template>
    <PageLayout>
      <router-link to="/">Go back</router-link>
      <div class="persons">
        <h3>Добавить нового ребенка:</h3>
        <div class="persons__add">
        <input placeholder="name" />
        <input placeholder="surname" />
        <input placeholder="patronomyc" />
        <input type="date" placeholder="birth date" />
        <input type="date" placeholder="die date" />
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input placeholder="biography" />
        <input placeholder="activity" />
        <div>
          <button>add</button>
        </div>
      </div>
      <h3>Текущие дети:</h3>
      <div class="persons__item" v-for="(p, index) in allPersons" :key="p.id">
        <span class="persons__index">#{{ index + 1 }}</span>
        <button class="persons__select-btn" @click="handleClick(p.id)">
          {{ p.firstName }} {{ p.secondName }}, {{ p.gender }}
        </button>
      </div>
      </div>
    </PageLayout>
  </template>
  
  <script>
  import PageLayout from "../../components/parts/PageLayout.vue";
  import { mapGetters } from "vuex";
  import { PERSONS_ROUTE } from "@/router/routes";
  export default {
    name: "PersonPage",
    components: {
      PageLayout
    },
    data() {
      return {
        PERSONS_ROUTE: PERSONS_ROUTE
      };
    },
    computed: {
      allPersons() {
      const lsPersons = localStorage.getItem("persons");
      if (lsPersons) {
        return JSON.parse(lsPersons);
      } else {
        const allPersons = this.getAllPersons;
        localStorage.setItem("persons", JSON.stringify(allPersons));
        return allPersons;
      }
    },
      ...mapGetters("persons", ["getAllPersons"])
    },
    methods: {
      handleClick(id) {
        this.$router.push(`${PERSONS_ROUTE}/${id}`);
      }
    }
  };
  </script>
  <style lang="less">
  .persons {
    margin-top: @indentHuge;
    display: flex;
    flex-direction: column;
  gap: @indentMedium;
  
  &__add {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__index {
    font-size: 26px;
    margin-right: @indentMedium;
  }

    &__select-btn {
      border-radius: 6px;
      background: coral;
      font-size: 20px;
      padding: 8px 14px;
      height: fit-content;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  </style>