<template>
    <PageLayout>
      <section class="p-16">
        <div class="form-games">
          <ElInput
            v-model="token"
            class="custom-form__input"
            type="text"
            placeholder="Токен"
            disabled
          />
          <SimpleButton @click="() => saveTokenFromApi()">Сохранить</SimpleButton>
        </div>
        <div class="form-games">
          <ElInput
            v-model="name"
            class="custom-form__input"
            type="text"
            placeholder="Название"
            @change="() => clearId()"
          />
          <ElInput
            v-model="id"
            class="custom-form__input"
            type="text"
            placeholder="ID"
            @change="() => clearName()"
          />
          <SimpleButton @click="() => searchGames()">Найти</SimpleButton>
        </div>
        <div class="games-container">
          <GameCard v-for="(game, index) in games" :key="index" :game="game" />
        </div>
      </section>
    </PageLayout>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  import PageLayout from '../parts/PageLayout.vue'
  import SimpleButton from '../ui/SimpleButton.vue'
  import GameCard from '../cards/GameCard.vue'
  
  export default {
    name: 'CreatePersonPage',
    components: {
      PageLayout,
      SimpleButton,
      GameCard
    },
    data () {
      return {
        name: '',
        id: ''
      }
    },
    computed: {
      ...mapGetters('games', [
        'getToken',
        'getGames'
      ]),
      token () {
        return this.getToken
      },
      games () {
        return this.getGames
      }
    },
    methods: {
      ...mapActions('games', [
        'saveToken', 'searchGamesByName', 'searchGameById'
      ]),
      searchGames () {
        if(this.name != '')
          return this.searchGamesByName(this.name)
        if(this.id != '')
          return this.searchGameById(this.id)
      },
      saveTokenFromApi () {
        return this.saveToken()
      },
      clearName () {
        this.name = ''
      },
      clearId() {
        this.id = ''
      }
    }
  }
  </script>
    
  <style scoped lang="less">
  .form-games {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    padding: 20px;
  }
  .games-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    row-gap: 30px;
    padding: 12px;
  }
  </style>
     