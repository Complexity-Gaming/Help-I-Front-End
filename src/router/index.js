import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../components/games')
  },
  {
    path: '/games/:id',
    name: 'game-menu',
    component: () => import('../components/game-menu')
  },
  {
    path: '/profile-player/:id',
    name: 'profile-player-player',
    component: () => import('../components/profile-player')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
