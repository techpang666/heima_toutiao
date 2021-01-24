// 封装axios
import axios from 'axios'

// 配置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000' // 测试服务器
// axios.defaults.baseURL = 'http://157.122.54.189:9083' // 上线服务器

export default axios