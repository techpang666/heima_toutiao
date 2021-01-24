// 模块化
import Vue from 'vue';
import VueRouter from 'vue-router';

// 安装路由
Vue.use(VueRouter);

// 创建配置路由
const router = new VueRouter({
	routes: [
		{
			name: 'login',
			// 路径
			path: '/login',
			// 异步加载组件
			component: () => import('@/views/login.vue'),
		},
		{
			name: 'register',
			path: '/register',
			component: () => import('@/views/register.vue'),
		},
		{
			name: 'personal',
			path: '/personal',
			component: () => import('@/views/personal.vue'),
		},
	],
});

// 添加全局的导航首页 前置守卫 跳转前触发
router.beforeEach((to, from, next) => {
  // 并不是所有页面都需要登录状态(token) 这里设置为个人中心页
	if (to.path.indexOf('/personal') === 0) {
    // 通过token判断用户是否登录过
    let token = localStorage.getItem('toutiao_59_token');
		// 如果有token证明登录过
		if (token) {
			next();
		} else {
			// 如果是需要授权的页面且没有登录的话 重定向到登录页
			next({ name: 'login' });
		}
	} else {
		// 如果不是需要授权的页面就不需要判断 直接放行
		next();
	}
});

// 暴露路由
export default router;
