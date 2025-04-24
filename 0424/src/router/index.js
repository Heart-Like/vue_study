import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout/IndexA.vue'
import Home from '@/views/layout/HomeA.vue'
import Category from '@/views/layout/CategoryA.vue'
import Cart from '@/views/layout/CartA.vue'
import User from '@/views/layout/UserA.vue'

import store from '@/store'

const Login = () => import('@/views/login/IndexA.vue')
const Search = () => import('@/views/search/IndexA.vue')
const SearchList = () => import('@/views/search/ListA.vue')
const ProDetail = () => import('@/views/prodetail/IndexA.vue')
const Pay = () => import('@/views/pay/IndexA.vue')
const MyOrder = () => import('@/views/myorder/IndexA.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder }
  ]
})
const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }

  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
