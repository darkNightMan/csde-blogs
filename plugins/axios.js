// import { Message } from "element-ui";
export default ({ redirect, $axios }) => {
  $axios.onRequest(config => {
    console.log('test onRequest', config.params)
    // 向请求头中塞入 token
    config.headers.token = 'xxx'
    // 向参数中塞入 token
    let data = {}
    if (config.method.toUpperCase() === 'GET') {
      data = config.params || {}
      data.token = 'sss'
      config.params = data
    } else {
      // POST 需要塞入 data
      data = config.data || {}
      data.token = 'sss2'
      config.data = data
    }
    // console.log('test onRequest2', config)
  });

  $axios.onResponse(res => {
    // 返回数据逻辑处理
    // console.log('test onResponse', res)
    if (res.data.code === 1) {
      // 重定向到 login 页
      // redirect('/login')
    }
  });

  $axios.onError(error => {
    // Message({
    //   //  饿了么的消息弹窗组件,类似toast
    //   showClose: true,
    //   message: error,
    //   type: "error.data.error.message"
    // });
    console.log('Making request to ' + error.response.config.url)
    switch (error.response.status) {
      case 403:
        // 重定向到 403 页
        // redirect('/error/403')
        break;
      case 404:
        // 重定向到 404 页
        // redirect('/error/404')
        break;
      case 500:
        // 重定向到 500 页
        // redirect('/error/500')
        break;
      default:
        break;
    }
  })
};