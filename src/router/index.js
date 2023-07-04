import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "search" */ '../views/login/LoginPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue'),
    },
    {
      path: '/library',
      name: 'library',
      component: () => import(/* webpackChunkName: "library" */ '../views/LibraryView.vue'),
    },
  ]
})

export default router
