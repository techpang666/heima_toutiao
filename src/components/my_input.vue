<template>
  <input
  type="text"
  class="my_input"
  @input="handlerInput"
  :class="{success:flag, error:!flag}"
  >
  <!-- 内容变化就会触发input事件 -->
</template>

<script>
export default {
  props: {
    rules: {
      type: RegExp
    }
  },
  data () {
    return {
      flag: true
    }
  },
  methods: {
    handlerInput(e) {
      let v = e.target.value;
      // v传值回去
      this.$emit('input', v)
      // 如果传递了正则
      if (this.rules) {
        if (this.rules.test(v)) {
          console.log('ok');
          this.flag = true
        }else {
          console.log('no');
          this.flag = false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my_input {
  width: 318 * 100vw/360;
  height: 50px;
  outline: none;
  border: none;
  border-bottom: 3px solid #ccc;
  font-size: 20px;
  line-height: 50px;
}
.success {
  border-bottom-color: green;
  color: green;
}
.error {
  border-bottom-color: red;
  color: red;
}
</style>