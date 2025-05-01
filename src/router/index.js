import { createRouter, createWebHistory } from 'vue-router';
import PlanetsView from '../views/PlanetsView.vue';

const routes = [
  {
    path: '/planets',
    name: 'planets',
    component: PlanetsView,
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
