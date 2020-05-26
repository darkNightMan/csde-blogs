// 引入axios
import axios from 'axios'
//  使用element-ui Message做消息提醒
import Toast from 'muse-ui-toast';
//  设置baseURL
//  axios.defaults.baseURL = '/api'
//  设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
//  设置请求过期时间
axios.defaults.timeout = 10000

//  请求拦截器
axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json',
    // 'token': window.localStorage.getItem('token')
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  console.log(response.data)
  // let data = response.data
  // //  根据后端接口code执行操作
  // switch (response.data.code) {
  //   // 处理共有的操作
  //   case 401: // '未授权
  //     break
  //   case 403: // token过期
  //     break
  // }
  // if (data.code !== 200) {
  //   Toast.error(data.msg)
  // }
  // Message.erroror(error.message)
  return response.data
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '连接到服务器失败'
  }
  Toast.error(error.message)
  return Promise.resolve(error.response)
})

export default class Req {
  //  get请求
  static get (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: param
      }).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
  //  post请求
  static post (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.post(

        url,
        param
      ).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
  //  put请求
  static put (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, param)
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }
  //  delete
  static delete (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, param)
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }
  upload (url, param = {}, config = {}) {
    return new Promise((resolve, reject) => {
      axios.post(
        url,
        param,
        config
      ).then(res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
}
