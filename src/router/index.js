import { createRouter, createWebHistory } from 'vue-router'
import { routesGeneral } from '../views/GeneralView/routes.general'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          component: <h3>Dashboard1</h3>,
        },
        // Other dashboard-related routes
      ],
    },
    {
      path: '/home',
      redirect: { name: 'home' }
    },
    */
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    routesGeneral,
  ]
})

export default router
