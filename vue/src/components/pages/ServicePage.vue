<template>
  <PageLayout>
    <ServiceComponent 
      :config="config" 
      :personName="personName"
      :description="description"
    /> 
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout.vue'
import ServiceComponent from '../ui/service/ServiceComponent.vue';

export default {
  name: 'ServicePage',
  components: {
    PageLayout,
    ServiceComponent
  },
  data() {
    return {
      config: {
        headerBackgroundClass: 'header__background',
        headerImageLink: 'https://ucare.timepad.ru/549b7f3e-7020-4f95-ba5f-ee77a42fbf55/poster_event_2408410.jpg',
        headerImageClass: 'header__image',
        mainBackgroundClass: 'main-background',
        links: [
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'link__first'
          },
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'link__second'
          },
          {
            label: 'Vkontakte',
            url: 'https://vk.com',
            viewClass: 'link__third'
          }
        ],
        titleClass: 'header__title',
        descriptionClass: 'description'
      },
      personName: 'Ксимона Никнамковна',
      description: 'Штрих'
    }
  }
}
</script>

<style lang="less">
  .header {
    &__image{
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      height: 100px;
      border: 5px solid white;
      border-radius: 50%;
    }

    &__background {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: orange;
      padding: 20px;
    }

    &__title {
      margin-top: 10px;
      color: white;
      text-shadow: 0px 2px 10px gray;
    }

    &__description {
      color: black;
      font-size: medium;
    }
  }

  .main-background {
    background-color: antiquewhite;
    padding-bottom: 100%;
  }

  .link {
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

    &__first {
      color: brown;
      background-color: orange;
    }

    &__second {
      color: gray;
      background-color: aquamarine;
    }

    &__third {
      color: black;
      background-color: greenyellow;
    }
  }
</style>
