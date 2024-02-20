<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>

<EducationForm :education="education" />
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import EducationForm from '../forms/EducationForm.vue';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    EducationForm
  }
}
</script>

<style scoped>
/* Стили для обертки страницы */
.page-wrapper {
  background-color: #fff; /* Белый цвет фона */
}
</style>
