<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>
    <WeddingForm :wedding="wedding" />
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import WeddingForm from '../forms/WeddingForm.vue';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  data: () => {
    return{
      wedding: {
        partner: {
          id: '1',
          name: 'Ivan',
          second_name: 'Ivanov'
        },
        date_start: '01.01.2024',
        date_end: '01.02.2024'
      },
    }
  },
  components: {
    PageLayout,
    WeddingForm,
  }
}
</script>

<style>
</style>