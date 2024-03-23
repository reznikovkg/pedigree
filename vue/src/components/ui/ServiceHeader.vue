<template>
  <div :class="headerBackgroundClass">
    <img 
      :class="headerImageClass"
      :src="headerImageLink"
      alt="Header Image"
    />
    <h1 :class="titleClass">
      {{ personName }}
    </h1>
    <h2 :class="descriptionClass">
      {{ description }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ServiceHeader',
  props: {
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
      titleClass: {
        type: String,
        default: ''
      },
      descriptionClass: {
        type: String,
        default: ''
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
