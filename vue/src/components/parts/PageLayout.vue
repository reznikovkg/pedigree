<template>
  <div>
    <div class="content">
      <NavigationPanel />
      <slot />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/ui/NavigationPanel.vue";

export default {
  name: 'PageLayout',
  components: {
    NavigationPanel
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
