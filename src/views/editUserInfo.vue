<template>
  <div class="editUserInfo">
    <MyHeader title="个人资料编辑">
      <span slot="left"
      class="iconfont iconjiantou2"
      @click="$router.back()"
      ></span>
      <span slot="right"
      class="van-icon van-icon-wap-home-o"
      style="font-size:20px;color:Red"
      @click="$router.push({name: 'index'})"
      ></span>
    </MyHeader>
    <div class="userimg">
      <img
      :src="current.head_img"
      alt="">
      <van-uploader :after-read="afterRead"/>
    </div>
    <MyCell
    title="昵称"
    :desc="current.nickname"
    ></MyCell>
    <MyCell
    title="密码"
    desc="****"
    ></MyCell>
    <MyCell
    title="性别"
    :desc="current.gender == 1 ? '男' : '女'"
    ></MyCell>
  </div>
</template>

<script>
// 导入子组件
import MyHeader from '@/components/MyHeader'
import MyCell from '@/components/MyCell'
// 导入文件上传的方法
import { uploadFile } from '@/apis/upload'
// 导入获取用户信息的方法
import { getUserInfo } from '@/apis/user'
// 导入axios模块
import axios from '@/utils/myAxios'

export default {
  components: {
    MyHeader,
    MyCell
  },
  data () {
    return {
      current: {}
    }
  },
  methods: {
    async afterRead (myFile) {
      // 自行将文件上传服务器
      // console.log(file);
      
      // 通过formdata收集文件数据
      console.log(myFile.file);
      let formdata = new FormData();
      formdata.append('file', myFile.file)
      // 调用uploadFile方法 实现文件上传
      let res = await uploadFile(formdata)
      console.log(res);
    }
  },
  async mounted () {
    // 通过id获取用户的信息
    let res = await getUserInfo(this.$route.params.id)
    console.log(res);
    // 进行数据改造并返回
    if (res.data.data.message == '获取成功') {
      // 改造数据
      res.res.data.data.head_img = axios.defaults.baseURL + res.res.data.data.head_img
      // 赋值给current
      this.current = res.res.data.data
    }
  }
}
</script>

<style lang="less" scoped>
.userimg {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }
  /deep/ .van-uploader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  /deep/ .van-uploader__upload {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    margin: 0;
  }
}
</style>