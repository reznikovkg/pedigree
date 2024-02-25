<template>
    <PageLayout>
      <router-link :to="PERSONS_ROUTE">Go back</router-link>
      <div class="single-person">{{ personData?.firstName }}</div>
    </PageLayout>
  </template>
  
  <script>
  import PageLayout from "../../components/parts/PageLayout.vue";
  import { PERSONS_ROUTE } from "@/router/routes";
  import { mapGetters } from "vuex";
  export default {
    name: "SinglePerson",
    components: {
      PageLayout
    },
    data() {
      return {
        PERSONS_ROUTE: PERSONS_ROUTE
        // personData: this.getPersonById(this.$route.params.id)
      };
    },
  
    computed: {
      personData() {
        return this.getPersonById(this.$route.params.id);
      },
      ...mapGetters("persons", ["getAllPersons", "getPersonById"])
    }
  };
  </script>
  
  <style lang="less">
  .single-person {
    margin-top: @indentHuge;
  }
  </style>