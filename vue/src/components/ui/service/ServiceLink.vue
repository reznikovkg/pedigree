<template>
  <div>
    <a 
      class="service-link" 
      :class="link.viewClass" 
      :href="link.url">{{ link.label }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ServiceLink',
  props: {
    link: {
      url: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      viewClass: {
        type: String,
        default: ''
      }
    }
  }
};
</script>

<style scoped lang="less">
  .service-link {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-weight: bolder;
    height: 50px;
  }
</style>
  