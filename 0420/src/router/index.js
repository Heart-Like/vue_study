import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/IndexA.vue'
import Search from '@/views/search/IndexA.vue'
import SearchList from '@/views/search/ListA.vue'
import ProDetail from '@/views/prodetail/IndexA.vue'
import Login from '@/views/login/IndexA.vue'
import Pay from '@/views/pay/IndexA.vue'
import MyOrder from '@/views/myorder/IndexA.vue'

import Home from '@/views/layout/HomeA.vue'
import Category from '@/views/layout/CategoryA.vue'
import Cart from '@/views/layout/CartA.vue'
import User from '@/views/layout/UserA.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
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
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})

// 全局前置导航守卫

// 1. to 往哪里去， 到哪去的路由信息对象
// 2. from 从哪里来， 从哪来的路由信息对象
// 3. next() 是否放行
// 如果next()调用，就是放行
// next(路径) 拦截到某个路径页面
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-undef
  // const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
  }

  /* if (token) {
    next()
  } else {
    next('/login')
  } */
})
export default router
