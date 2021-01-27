// 导入第三方处理时间模块
import moment from 'moment'

// 过滤器本质就是一个函数
export const dateFormat = function (data, spe = '/') {
  // 通过第三方模块处理时间
  return moment(data).format(`YYYY${spe}MM${spe}DD HH:mm:ss`)
}