<template>
  <div class="personal">
    <router-link to="/edit_profile">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img src="http://img1.imgtn.bdimg.com/it/u=3757784226,1202878475&fm=26&gp=0.jpg" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>我就是我
          </div>
          <div class="time">2019-9-24</div>
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
import MyCell from '@/components/MyCell'
export default {
  components: {
    MyCell
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