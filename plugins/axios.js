import axios from "axios";
// const baseURL = 'http://rap2api.taobao.org/app/mock/118670';  //线上的URL前缀
// axios.defaults.baseURL = baseURL;   //定义好公共的URL地址


// 设置axios拦截器---->存储登录状态
// axios.interceptors.request.use(function (config) {
//   // 取出localStorage中存储的token值
//   // let token = localStorage.getItem('mytoken');
//   config.headers[''] = token
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
export default axios;
