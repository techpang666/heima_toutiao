<template>
  <input
  type="text"
  class="my_input"
  :class="{success:flag, error:!flag}"
  @input="handlerInput"
  @blur="handlerChange"
  >
  <!-- 内容变化就会触发input事件 -->
</template>

<script>
// 引入toast组件
import {Toast} from 'vant'
export default {
  props: {
    rules: {
      type: RegExp
    },
    msg: {
      type: String,
      // 父组件不给数据就默认值呗
      default: '输入错误，请重新输入'
    }
  },
  data () {
    return {
      flag: true
    }
  },
  methods: {
    // @input 判断用户输入内容
    handlerInput(e) {
      let value = e.target.value;
      // value传值回去
      this.$emit('input', value)
      // 如果传递了正则 进行判断
      if (this.rules) {
        if (this.rules.test(value)) {
          console.log('格式正确');
          this.flag = true
        }else {
          // console.log('no');
          this.flag = false
        }
      }
    },
    // @blur 提示用户输入错误
    handlerChange(e) {
      if(this.rules) {
        // 取反 提示用户输入错误
        if(!this.rules.test(e.target.value)) {
          Toast.fail({
            message: this.msg,
            duration: 3000,
            position: 'top'
          })
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