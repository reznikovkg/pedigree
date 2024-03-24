<template>
  <div :class="config.headerBackgroundClass">
    <img 
      :class="config.headerImageClass"
      :src="config.headerImageLink"
      alt="Header Image"
    />
    <h1 :class="config.titleClass">
      {{ personName }}
    </h1>
    <h2 :class="config.descriptionClass">
      {{ description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ServiceHeader',
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
