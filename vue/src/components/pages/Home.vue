<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
    </section>
    <PhotoPreview size="large" photo="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg" />
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import PhotoPreview from '../ui/PhotoPreview.vue';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    PhotoPreview
  }
}
</script>

<style>
</style>
