<template>
  <div :class="config.mainBackgroundClass">
    <ServiceHeader
      :headerBackgroundClass="config.headerBackgroundClass"
      :headerImageLink="config.headerImageLink"
      :headerImageClass="config.headerImageClass"
      :titleClass="config.titleClass"
      :descriptionClass="config.descriptionClass"
      :personName="personName"
      :description="description"
    /> 
    <ServiceList
      :links="config.links"
    />
  </div>
</template>

<script>
import ServiceHeader from './ServiceHeader.vue'
import ServiceList from './ServiceList.vue'

export default {
  name: 'ServiceComponent',
  components: {
    ServiceHeader,
    ServiceList
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
