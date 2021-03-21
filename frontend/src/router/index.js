import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/app',
    name: "Main",
    component: () => import('../views/Main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
