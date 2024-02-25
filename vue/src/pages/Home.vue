<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <router-link class="router" :to="PERSONS_ROUTE">Перейти просмотру людей</router-link>
    </section>
  </PageLayout>
</template>

<script>

import PageLayout from "../components/parts/PageLayout.vue";
import { PERSONS_ROUTE } from "@/router/routes";
import { helpModal } from "@/mixins/modals";

export default {
  name: "HomePage",
  data() {
    return {
      PERSONS_ROUTE: PERSONS_ROUTE
    };
  },
  mixins: [helpModal],
  components: {
    PageLayout
  }
};
</script>

<style>
.router {
  margin: 0 16px;
}
</style>
