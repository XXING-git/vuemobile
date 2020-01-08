import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login' // 引入登录页面

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
