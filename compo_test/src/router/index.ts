import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Shoes',
      component: () => import('../pages/_layout/MainLayout.vue'),
      children: [
        {
          path: 'kappashoes',
          component: () => import('../pages/ProductInfoPage/ProductInfoPage.vue'),
        },
      ],
    },
  ]
})

export default router
