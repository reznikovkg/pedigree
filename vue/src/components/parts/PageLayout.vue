<template>
  <div>
    <div class="content">
      <HeaderComponent />
      <NavigationPanel />
      <slot />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/ui/NavigationPanel.vue";
import HeaderComponent from "@/components/ui/HeaderComponent.vue"
import FooterComponent from "@/components/ui/FooterComponent.vue"

export default {
  name: 'PageLayout',
  components: {
    NavigationPanel,
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
