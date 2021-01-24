// 引入axios
import axios from '@/utils/myAxios'
// import axios from '../utils/myAxios'

// 登录方法
export const userLogin = function (data) {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

// 注册方法
export const userRegister = function (data) {
  return axios ({
    url: '/register',
    method: 'post',
    data
  })
}