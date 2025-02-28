import {TIMEOUT, ERR_OK, baseURL, STATUS} from 'assets/js/config'
import axios from 'axios'
import qs from 'qs'

/**
 * 将中文转换为 ASCII 码
 * @param  {Object} params {key: '汉字'}
 * @return {Object}        {key: '%E6%B1%89%E5%AD%97'}
 */
export const handleChinese = function (params) {
  const pattern = new RegExp("[\u4E00-\u9FA5]+") // 正则匹配中文字符
  let newObj = {}
  for (let i in params) {
    if (pattern.test(params[i])) {
      newObj[i] = encodeURI(params[i])
    }
  }
  return newObj
}

// axios 配置   prod  测试的ip   dev  开发的ip
export const xhr = axios.create({
  baseURL: baseURL.prod,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

//添加请求拦截器
xhr.interceptors.request.use(function (config) {
  // 如果请求是 post 的请求 用qs 配置下 请求参数
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    console.log('POST baseURL=',baseURL)
    return config
  }

  // 采用完全自定义的方式书写 get 的请求时，将 post请求中放在 data 里面的数据，放到 params当中
  if (config.method === 'get' && config.data && Object.keys(config.data).length) {
    config.params = qs.parse(config.data)
    console.log('GET baseURL=',baseURL)
    return config
  }

  // 简单的调用 get 请求
  if (config.method === 'get') {
    // console.log(config)
    // let params = handleChinese(config.params)         // 中文字符替换成 ASCII 码
    // config.url += '?' + qs.stringify(params, { encode: false })
    // config.params = {}
    return config
  }

}, function (error) {
  //请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
xhr.interceptors.response.use(function (response) {
  if (response.data[STATUS] === ERR_OK) {
    return response.data
  } else {
    // 接口异常返回
    const flag = parseInt(response.data[STATUS])
    const msg = flag === 201 ? '201 error: Missing parameter' : flag === 202 ? '202 error: Parameter is malformed' : flag === 500 ? '500 error: Background error' : flag === '501' ? '501 error: No data' : flag === '502' ? '502 error: Session expired' : 'Unknown error'
    console.error(msg)
    return Promise.reject(response.data)
  }
}, function (error) {
  console.error('Request failed')
  return Promise.reject(error)
})


