import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login' // 引入登录页面

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    // 有默认子路由的不需要配置 name
    // name: 'tab-bar',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import('@/views/user')
  }
]
const router = new VueRouter({
  routes
})

export default router
