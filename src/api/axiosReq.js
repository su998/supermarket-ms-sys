import axios from 'axios'
import qs from 'qs'
// 设置默认请求根目录
axios.defaults.baseURL = 'http://127.0.0.1:666'

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  // 将token放到请求头发送给服务器,将tokenkey放在请求头中
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default {
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
