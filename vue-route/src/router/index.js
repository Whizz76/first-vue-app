import { createRouter, createWebHistory } from 'vue-router'
import a from '../views/project/a.vue'
import b from '../views/project/b.vue'
import c from '../views/project/c.vue'
import home from '../views/home.vue'

const routes = [
  {
    path:'',
    name:'home',
    component:home

  },
  {
    path:'/a',
    name:'a',
    component:a
  },
  {
    path:'/b',
    name:'b',
    component:b
  },
  {
    path:'/c',
    name:'c',
    component:c
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
