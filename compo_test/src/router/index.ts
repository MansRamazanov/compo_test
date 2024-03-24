import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/companies',
      meta: { requiresAuth: true, requiresAdmin: false, collection: 'companies' },
      component: () => import('../components/_layout/MainLayout.vue'),
      children: [
        {
          path: '/overpriceshoes',
          component: () => import('../pages/ProductInfoPage/ProductInfoPage.vue'),
        },
      ],
    },
  ]
})

export default router
