<template>
  <div class="service-link" :class="viewClass">
    <a :href="url" target="_blank" rel="noopener noreferrer">{{ label }}</a>
  </div>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: () => ''
    },
    viewClass: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="less">
.service-link {
  width: 100%;
  padding: 16px 24px;
  text-align: center;
  box-sizing: border-box;
}
</style>
