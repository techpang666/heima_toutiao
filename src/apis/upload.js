// 引入axios
import axios from '@/utils/myAxios'

// 实现文件上传的方法
export const uploadFile = function (data) {
  return axios ({
    method: 'post',
    url: '/upload',
    data,
  })
}