// 封装axios
import axios from 'axios'

// 配置基准路径
// axios.defaults.baseURL = 'http://127.0.0.1:3000' // 测试服务器
axios.defaults.baseURL = 'http://157.122.54.189:9083' // 上线服务器

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 获取token
  let token = localStorage.getItem('heima_toutiao_token')
  console.log(config);
  // 判断是否有token
  if(token) {
    // 传递token
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default axios