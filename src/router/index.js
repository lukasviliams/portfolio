import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Manage from '../views/Manage.vue'
import Bookmark from '../views/Bookmark.vue'
import Insure from '../views/Insure.vue'
import Fylo from '../views/Fylo.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path:'/manage', 
    name: 'Manage', 
    component: Manage
  },
  {
    path:'/bookmark', 
    name: 'Bookmark', 
    component: Bookmark,
  }, 
  {
    path:'/insure', 
    name:'Insure', 
    component: Insure,
  }, 
  {
    path:'/fylo', 
    name:'Fylo',
    component: Fylo,
  },
  {
    path:'/contact', 
    name: 'Contact', 
    component: Contact
  },
  // Redirect 404
  {
    path: '/:catchAll(.*)', 
    name: 'notFound', 
    component: Home
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
