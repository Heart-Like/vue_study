import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象，并传入路由配置
const router = new VueRouter({
  routes: [
    // 这里要改写
    { path: '/home', component: Home },
    // 加一个问号 ？，表示这个参数是可选的
    { path: '/search/:words?', component: Search }
  ]
})

export default router