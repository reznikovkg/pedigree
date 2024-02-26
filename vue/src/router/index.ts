import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home.vue";
import PersonsPage from "../pages/Persons/Persons.vue";
import { RouteNames } from "./routes";
import SinglePerson from "@/pages/Persons/SinglePerson.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: "/persons",
    name: RouteNames.PERSONS,
    component: PersonsPage
  },
  {
    path: "/persons/:id",
    name: RouteNames.PERSON,
    component: SinglePerson
  },
  // {
  //   path: '/person/:id',
  //   name: 'PersonPage',
  //   component: PersonPage
  // },
  // {
  //   path: '/person/:id/edit',
  //   name: RouteNames.EDIT_PERSON,
  //   component: EditPersonPage
  // },
  // {
  //   path: '/create',
  //   name: RouteNames.CREATE_PERSON,
  //   component: CreatePersonPage
  // }
];


const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
