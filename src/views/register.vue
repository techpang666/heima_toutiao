<template>
	<div class="container">
		<div class="close"><span class="iconfont iconicon-test"></span></div>
		<div class="logo"><span class="iconfont iconnew"></span></div>
		<div class="inputs">
			<MyInput
			:rules="/^(?:(?:\+|00)86)?1[3-9]\d{9}$/"
			msg="手机号错误，请重新输入"
			placeholder="用户名/手机号"
			v-model="user.username"
			></MyInput>
			<MyInput
			placeholder="密码"
			v-model="user.password"
			></MyInput>
			<MyInput
			placeholder="昵称"
			v-model="user.nickname"
			></MyInput>
		</div>
		<p class="tips">已有帐号?<a href="#/login" class="">去登录</a></p>
		<!-- 使用组件 -->
		<MyButton
		type="primary"
    @click="register"
		>注册</MyButton>
	</div>
</template>

<script>
// 引入组件
import MyButton from '@/components/MyButton';
import MyInput from '@/components/MyInput';
import {Toast} from 'vant'

// 引入注册方法
import {userRegister} from '@/apis/user'

export default {
	// 注册组件
	components: {
		MyButton,
		MyInput,
  },
  data () {
    return {
      user: {
        username: '',
        password: '',
        nickname: '',
      }
    }
  },
  methods: {
    async register () {
      // 拿到用户注册数据
      let res = await userRegister(this.user)
      console.log(res);
      if (res.data.message == '注册成功') {
        Toast.success(res.data.message)
        // 跳转路由 回到登录页
        this.$router.push({name: 'login'})
      } else {
        Toast.fail('注册失败，请重试！')
      }
    }
  }
}
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