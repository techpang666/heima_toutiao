// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

// 创建配置路由
const router = new VueRouter({
  routes: [
    {
      name: 'login',
      // 路径
      path: '/login',
      // 异步加载组件
      component: () => import('../views/login.vue')
    }
  ]
})

// 暴露路由
export default router