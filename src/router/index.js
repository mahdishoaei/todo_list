import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: function () {
          return import('@/pages/home/index.vue');
        },
      },
      {
        path: '/create',
        name: 'create',
        component: function () {
          return import('@/pages/create/index.vue');
        },
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
