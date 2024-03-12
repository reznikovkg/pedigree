<template>
  <PageLayout>
    <PaginationComponent v-model="paginationInfo" />
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/parts/PageLayout.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

export default {
  name: 'PaginationPage',
  components: {
    PageLayout,
    PaginationComponent
  },
  data() {
    return {
      paginationInfo: {
        currentPage: 1,
        elementsLength: 1000
      }
    }
  }
}
</script>
