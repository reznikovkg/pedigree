<template>
  <div>
    <a :class = "link.viewClass" :href="link.url"> {{ link.label }} </a>
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
