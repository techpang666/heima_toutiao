<template>
  <div class="my_cell">
    <div class="left">{{title}}</div>
    <div class="right">{{desc}}<span class="iconfont iconjiantou1"></span></div>
  </div>
</template>

<script>
export default {
  // 父传子 这里可以用数组即可
  props: ['title', 'desc']
}
</script>

<style lang="less" scoped>
.my_cell {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  height: 60px;
  align-items: center;
  padding: 0 15px;
  .left {
    font-size: 14px;
  }
  .right {
    font-size: 12px;
    color: #999;
    .iconfont {
      font-size: 12px;
      margin-left: 5px;
    }
  }
}
</style>