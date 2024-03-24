import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import PersonPage from '../components/pages/PersonPage.vue'
import EditPersonPage from '../components/pages/EditPersonPage.vue'
import CreatePersonPage from '../components/pages/CreatePersonPage.vue'
import SettingsPage from '../components/pages/SettingsPage.vue'
import PaginationPage from '../components/pages/PaginationPage.vue'
import { RouteNames } from './routes'
import GamesPage from '@/components/pages/GamesPage.vue'
import PersonList from '../components/pages/PersonList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/person/:id',
    name: RouteNames.PERSON,
    component: PersonPage
  },
  {
    path: '/person/:id/edit',
    name: RouteNames.EDIT_PERSON,
    component: EditPersonPage
  },
  {
    path: '/create',
    name: RouteNames.CREATE_PERSON,
    component: CreatePersonPage
  },
  {
    path: '/settings',
    name: RouteNames.SETTINGS,
    component: SettingsPage
  },
  {
    path: '/pagination',
    name: RouteNames.PAGINATION,
    component: PaginationPage
  },
  {
    path: '/list',
    name: RouteNames.PERSON_LIST,
    component: PersonList
  },
  {
    path: '/games',
    name: RouteNames.GAMES,
    component: GamesPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
