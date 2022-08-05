import Vue from 'vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/login',
    name: '/login',
    component: () => import ('../views/Login.vue')
  },

  {
    path: '/user',
    name: 'user',
    component: () => import ('../views/Conta.vue')
  },

  // {
  //   path: '/',
  //   name: '/',
  //   component: () => import ('../views/Conta.vue')
  // }
]


const router = new VueRouter({
  routes
})


export default router
