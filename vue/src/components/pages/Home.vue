<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <NavigationPanel />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import NavigationPanel from "@/components/ui/NavigationPanel";
import { helpModal } from "@/mixins/modals";


export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    NavigationPanel,
  }
}
</script>
