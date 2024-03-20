<template>
  <div class="service-card">
    <div class="service-card__header" :class="configuration.headerBackgroundClass">
      <img
        :class="configuration.headerImgClass"
        :src="configuration.headerImgLink"
        alt="header img"
      />
      <p :class="configuration.nameClass">{{ configuration.name }}</p>
      <p :class="configuration.descriptionClass">
        {{ configuration.description }}
      </p>
    </div>
    <div class="service-card__main" :class="configuration.mainBackgroundClass">
      <LinkComponent
        v-for="(link, index) in configuration.linksList"
        :key="index"
        :label="link.label"
        :url="link.url"
        :view-class="link.viewClass"
      />
    </div>
  </div>
</template>

<script>
import LinkComponent from '@/components/serviceComponents/LinkComponent.vue'

export default {
  name: 'CardComponent',
  components: { LinkComponent },
  props: {
    configuration: {
      headerBackgroundClass: {
        type: String,
        default: ''
      },
      headerImgLink: {
        type: String,
        default: 'https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg'
      },
      headerImgClass: {
        type: String,
        default: ''
      },
      mainBackgroundClass: {
        type: String,
        default: () => ''
      },
      linksList: {
        type: Array,
        default: () => []
      },
      name: {
        type: String,
        default: ''
      },
      nameClass: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      descriptionClass: {
        type: String,
        default: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.service-card {
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;

  &__header {
    padding: 24px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  &__main {
    height: 100%;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
  }
}
</style>
