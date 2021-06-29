import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',          name: 'home',     component: Home, meta: {title: 'Home'} },
  { path: '/about',     name: 'about',    component: () => import('../views/about.vue'), meta: {title: 'About Us'}},
  { path: '/games/:id', name: 'game',     component: () => import('../views/game'), meta: {title: 'Game Menu'}},
  { path: '/login',     name: 'login',    component: () => import('../views/login'), meta: {title: 'Login'}},
  { path: '/register',  name: 'register', component: () => import('../views/register'), meta: {title: 'Register'}},
  { path: '/profile',   name: 'profile',  component: () => import('../views/profile'), meta: {title: 'Profile'}},
  { path: '/games/:id/experts',   name: 'experts',  component: () => import('../views/experts'), meta: {title: 'Experts'}},
  { path: '/games/:id/materials',   name: 'materials',  component: () => import('../views/materials'), meta: {title: 'Materials'}}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
