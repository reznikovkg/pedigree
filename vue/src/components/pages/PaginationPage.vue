<template>
  <PageLayout>
    <PaginationComponent
      :elements-length="elementsLength"
      :current-page="currentPage"
      @setPage="setPage"
    />
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
      currentPage: 1,
      elementsLength: 1000
    }
  },
  methods: {
    setPage(newPage) {
      this.currentPage = newPage
    }
  }
}
</script>
