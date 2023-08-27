import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'Detail',
    path: '/detail',
    component: () => import('../views/Detail.vue')
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
