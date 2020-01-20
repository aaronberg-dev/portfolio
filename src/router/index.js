import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const parseProps = (r) => ({ id: r.params.id })

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/details/:id',
    props: parseProps,
    name: 'details',
    component: () => import('../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
