// 引入axios
import axios from '@/utils/myAxios'

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

// 获取当前用户的详情
export const getUserInfo = function (id) {
  return axios({
    // 参数是路由参数
    url: `/user/${id}`,
    // 需要授权的api需要带上token验证 键值对
    // headers: {Authorization: localStorage.getItem('heima_toutiao_token')}
  })
}


