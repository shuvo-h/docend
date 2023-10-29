import { createRouter, createWebHistory } from 'vue-router'
import { routesGeneral } from '../views/GeneralView/routes.general'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    routesGeneral,
  ]
})

export default router
