<template>
    <PageLayout>
      <router-link to="/">Go back</router-link>
      <div class="persons">
        <button
          @click="handleClick(p.id)"
          class="persons__select-btn"
          v-for="p in getAllPersons"
          :key="p.id"
        >
          {{ p.firstName }} {{ p.secondName }}, {{ p.gender }}
        </button>
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
    flex-wrap: wrap;
    gap: @indentHuge;
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