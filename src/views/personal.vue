<template>
  <div class="personal">
    <!-- 拼接当前用户的id进行资料编辑 -->
    <router-link to="'/editUserInfo/' + $route.params.id">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <!-- 可以axios进行拼接 但建议进行数据改造使用 -->
        <img :src="current.head_img" alt />
        <!-- <img :src="axios.defaults.baseURL + current.head_img" alt /> -->
        <div class="profile-center">
          <div class="name">
            <!-- 动态绑定性别 -->
            <span :class="{iconfont:true, iconxingbienan: current.gender == 1, iconxingbienv: current.gender == 0}"></span>{{current.nickname}}
          </div>
          <div class="time">{{current.create_date | dateFormat}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <MyCell title="我的关注" desc="关注的用户"></MyCell>
    <MyCell title='我的跟帖' desc='跟帖/回复'></MyCell>
    <MyCell title='我的收藏' desc='文章/视频'></MyCell>
    <MyCell title='设置'></MyCell>
  </div>
</template>

<script>
// 导入子组件
import MyCell from '@/components/MyCell'
// 导入获取用户信息的方法
import { getUserInfo } from '@/apis/user'
// 导入axios模块
import axios from '@/utils/myAxios'
// 导入处理时间的过滤器
import { dateFormat } from '@/utils/myFilters'

export default {
  components: {
    MyCell
  },
  data () {
    return {
      // 接收返回值
      current: {},
      // 模板中使用需要定义这个成员
      // axios
    }
  },
  filters: {
    // 注册过滤器
    dateFormat
  },
  async mounted () {
    // 通过`route`获取用户id
    console.log(this.$route.params.id);
    let res = await getUserInfo(this.$route.params.id)
    console.log(res);
    // 获取数据 赋值给current
    if (res.data.message == '获取成功') {
      // 渲染前 进行数据改造 这里拼接基准路径
      res.data.data.head_img = axios.defaults.baseURL + res.data.data.head_img
      this.current = res.data.data
    }
  }
}
</script>

<style lang="less" scoped>
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}

.btn {
  margin:  20px auto;
  background-color: #f00;
}
</style>