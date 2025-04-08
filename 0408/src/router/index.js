import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // artical 路径 → Article组件
    {
      path: '/',
      component: Layout,
      // 子路由
      children: [
        {
          path: 'article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/detail',
      component: ArticleDetail
    }
  ]
})

export default router
