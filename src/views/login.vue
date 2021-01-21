<template>
		<div class="container">
			<div class="close"><span class="iconfont iconicon-test"></span></div>
			<div class="logo"><span class="iconfont iconnew"></span></div>
			<div class="inputs">
				<!-- 如果子组件有内置属性 可以根组件添加或者绑定 -->
				<!-- <my_input
				placeholder="请输入手机号"
				:value="user.username"
				@input="handler"
				></my_input> -->


				<my_input
				placeholder="请输入手机号"
				v-model="user.username"
				:rules="/^(?:(?:\+|00)86)?1[3-9]\d{9}$/"
				></my_input>
				<my_input
				placeholder="请输入密码"
				v-model="user.password"
				></my_input>
			</div>
			<p class="tips">没有账号？<a href="#/register" class="">去注册</a></p>
			<!-- 使用组件 -->
			<my_button type= "danger" @click="login">欢迎回归</my_button>
		</div>
</template>

<script>
// 引入组件
import my_button from '@/components/my_button'
import my_input from '@/components/my_input'
export default {
	// 注册组件
	components: {
		my_button,
		my_input
	},
	data() {
		return {
			user: {
				username: '13800138000',
				password: '123'
			}
		}
	},
	methods: {
		login(e) {
			// 点击的是子组件
			// 需要子组件告诉父组件触发单击事件
			console.log('登录测试', e);
			console.log(this.user.username);
		},
		// 有了`v-model` 就不用自己处理了

		// handler(v) {
		// 	console.log(v);
		// 	/* 把内容传回给username */
		// 	this.user.username = v
		// }
	}
};
</script>

<style lang="less" scoped>
.container {
	padding: 20px;
}

.close {
	span {
		font-size: 27 / 360 * 100vw;
	}
}

.logo {
	display: flex;
	justify-content: center;

	span {
		display: block;
		font-size: 126 / 360 * 100vw;
		color: #d81e06;
	}
}

.inputs {
	input {
		margin-bottom: 20px;
	}
}

.tips {
	text-align: right;
	margin-bottom: 20px;

	a {
		color: #3385ff;
	}
}
</style>
