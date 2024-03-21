<template>
  <PageLayout>
    <div class="service-page">
      <CardComponent :configuration="configuration" />
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/parts/PageLayout.vue'
import CardComponent from '@/components/serviceComponents/CardComponent.vue'

export default {
  name: 'ServicePage',
  components: {
    CardComponent,
    PageLayout
  },
  data() {
    return {
      configuration: {
        headerBackgroundClass: 'configuration__bg-header',
        headerImgLink:
          'https://img.freepik.com/premium-photo/red-background-with-red-background-with-red-background-with-word-i-m-written-it_421632-14350.jpg',
        headerImgClass: 'configuration__img-header',
        mainBackgroundClass: 'configuration__bg-main',
        linksList: [
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'configuration__first-link'
          },
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'configuration__second-link'
          },
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'configuration__third-link'
          }
        ],
        nameClass: 'configuration__name',
        descriptionClass: 'configuration__description',
        name: 'Firstname Secondname',
        description: 'Service of service'
      }
    }
  }
}
</script>

<style lang="less">
.service-page {
  display: flex;
  justify-content: center;
}

.configuration {
  &__bg-header {
    background: @cBaseLightGinger;
  }

  &__img-header {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 6px solid white;
  }

  &__bg-main {
    background: #fff5b9;
  }
  
  &__first-link {
    font-size: @sizeFontL;
    color: @cBaseGinger;
    border: 1px solid @cBaseGinger;
    background: @cBaseLightGinger;
    font-weight: @fwBold;
  }

  &__second-link {
    font-size: @sizeFontL;
    color: @cBaseGinger;
    border: 1px solid @cBaseGinger;
    background: #7aff76;
    font-weight: @fwBold;
  }

  &__third-link {
    font-size: @sizeFontL;
    color: #070295;
    border: 1px solid @cBaseGinger;
    background: #ff5c7a;
    font-weight: @fwBold;
  }

  &__name {
    color: white;
    font-size: @sizeFontL;
    font-weight: @fwBold;
    text-shadow: black 0 2px 8px;
    margin: 0;
  }

  &__description {
    color: #474747;
    font-size: 16px;
    font-weight: @fwBold;
    margin: 0;
  }
}
</style>

