<template>
  <!-- 根据用户的参数绑定类 -->
  <div
  class="btn"
  @click="handler"
  :class='{"primary":type=="primary","danger":type=="danger"}'
  >
    <!-- 使用匿名插槽 根据用户的内容进行填充 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 父传子 接收父组件的值
  // 一般都是对象
  // 父组件给子组件传值的时候 优先这里`props`
  props: {
    type: {
      type: String
    }
  },
  methods: {
    handler(e) {
      console.log('子组件测试', e);
      // 需要告诉父组件要触发单击事件
      // 建议传参e 万一需要用
      // 记得上面调用
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 318 * 100vw/360;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background-color: #ccc;
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  color: #666;
}
.primary {
  border: 1px solid rgb(67, 145, 4);
  background-color: rgb(67, 145, 4);
  color: #fff;
}
.danger {
  border: 1px solid rgb(211, 29, 13);
  background-color: rgb(211, 29, 13);
  color: #fff;
}
</style>