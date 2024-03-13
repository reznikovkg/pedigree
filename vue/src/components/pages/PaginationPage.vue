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
        page: 1,
        count: 1000,
        limit: 10
      }
    }
  }
}
</script>
