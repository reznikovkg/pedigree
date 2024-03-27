<template>
  <div>
    <div class="content">
      <HeaderComponent />
      <slot />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/ui/HeaderComponent.vue"
import FooterComponent from "@/components/ui/FooterComponent.vue"

export default {
  name: 'PageLayout',
  model: {
    prop: 'person'
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.content {
  margin: 0 auto;
  padding: 20px 34px;
  overflow: auto;
  box-sizing: border-box;
  max-width: 1000px;
}
</style>
