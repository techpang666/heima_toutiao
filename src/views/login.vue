<template>
	<div class="container">
		<div class="close"><span class="iconfont iconicon-test"></span></div>
		<div class="logo"><span class="iconfont iconnew"></span></div>
		<div class="inputs">
			<MyInput
			:rules="/^(?:(?:\+|00)86)?1[3-9]\d{9}$/"
			msg="手机号错误，请重新输入"
			placeholder="请输入手机号(测试账号:admin)"
			v-model="user.username"
			></MyInput>
			<MyInput
			placeholder="请输入密码(测试密码:123456)"
			v-model="user.password"
			></MyInput>
		</div>
		<p class="tips">没有账号？<a href="#/register" class="">去注册</a></p>
		<!-- 使用组件 -->
		<MyButton
		type="danger"
		@click="login"
		>欢迎回归666</MyButton>
	</div>
</template>

<script>
// 引入组件
import MyButton from '@/components/MyButton';
import MyInput from '@/components/MyInput';
// 引入登录方法
import { userLogin } from '@/apis/user';
// 引入Toast
import {Toast} from 'vant'

export default {
	// 注册组件
	components: {
		MyButton,
		MyInput,
	},
	data() {
		return {
			user: {
				username: '13800138000',
				password: '123',
				// username: 'admin',
				// password: '123456',
			},
		};
	},
	methods: {
		// async 用于标记当前方法是异步方法
		async login(e) {
			if(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.user.username) && /^.{3,}$/.test(this.user.password)) {
				// userLogin(this.user)
				// 	.then((res) => {
				// 		console.log(res);
				// 	})
				// 	.catch((err) => {
				// 		console.log(err);
				// 	});

				// await可以实现先等待异步操作执行完毕 再执行后面的代码
				// 它可以获取them中的回调函数并返回
				// await必须在async函数中
				let res = await userLogin(this.user)
				console.log(res);
			}else {
				Toast('用户名或密码不正确，请重新输入')
			}
		},
	},
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
