<template>
  <div>
    <div v-for="(link, index) in links" :key="index">
      <a :class = "link.viewClass" :href="link.url"> {{ link.label }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceList',
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
