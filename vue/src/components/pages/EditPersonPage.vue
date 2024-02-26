<template>
  <PageLayout>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout.vue'

export default {
  name: 'EditPersonPage',
  components: {
    PageLayout
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
