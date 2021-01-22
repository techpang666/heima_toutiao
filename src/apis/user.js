// 引入axios
import axios from '@/utils/myAxios'
// import axios from '../utils/myAxios'

export const login = function (data) {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}