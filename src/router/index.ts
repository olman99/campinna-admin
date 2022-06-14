import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '/product',
          name: 'product',
          component: () => import('../views/Products/index.vue'),
          children:[
            {
              path: '/product/lists',
              name: 'lists',
              component: () => import('../views/Products/lists.vue')
            },
            {
              path: '/product/editor',
              name: 'editor',
              component: () => import('../views/Products/editor.vue')
            }
          ]
        },
      ]
    },
  ]
})

export default router
