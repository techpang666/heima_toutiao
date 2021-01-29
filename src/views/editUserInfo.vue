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
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
  components: {
    MyHeader
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