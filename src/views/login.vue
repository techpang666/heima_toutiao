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


				<MyInput
				placeholder="请输入手机号(测试账号:13800138000)"
				:rules="/^(?:(?:\+|00)86)?1[3-9]\d{9}$/"
				msg="手机号错误，请重新输入"
				></MyInput>
				<!-- v-model="user.username" -->
				<!-- v-model="user.password" -->
				<MyInput
				placeholder="请输入密码(测试密码:123)"
				></MyInput>
			</div>
			<p class="tips">没有账号？<a href="#/register" class="">去注册</a></p>
			<!-- 使用组件 -->
			<MyButton type= "danger" @click="login">欢迎回归666</MyButton>
		</div>
</template>

<script>
// 引入组件
import MyButton from '@/components/MyButton'
import MyInput from '@/components/MyInput'
import {login} from '@/apis/user'

export default {
	// 注册组件
	components: {
		MyButton,
		MyInput
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
