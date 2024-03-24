<template>
  <div :class="config.mainBackgroundClass">
    <ServiceHeader
      :config="config"
      :personName="personName"
      :description="description"
    /> 
    <div v-for="(link, index) in config.links" :key="index">
      <ServiceLink
        :link="link"
      />
    </div>
  </div>
</template>

<script>
import ServiceHeader from './ServiceHeader.vue'
import ServiceLink from './ServiceLink.vue'

export default {
  name: 'ServiceComponent',
  components: {
    ServiceHeader,
    ServiceLink
  },
  props: {
    config: {
      headerBackgroundClass: {
        type: String,
        default: ''
      },
      headerImageLink: {
        type: String,
        default: ''
      },
      headerImageClass: {
        type: String,
        default: ''
      },
      mainBackgroundClass: {
        type: String,
        default: ''
      },
      links: {
        type: Array,
        default: []
      },
      titleClass: {
        type: String,
        default: ''
      },
      descriptionClass: {
        type: String,
        default: ''
      }
    },
    personName: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }              
  }
}
</script>
