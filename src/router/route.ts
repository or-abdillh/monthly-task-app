import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue')
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
