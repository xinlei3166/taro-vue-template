import Taro from '@tarojs/taro'
import { getToken } from './internal'

const config = {
  // 页面都不需要登录
  needLogin: true,
  // 不需要登录的页面，白名单
  whiteList: [],
  // 需要登录的页面
  authPages: ['/pages/my/index', '/package1/pages/components/store/index'],
  // 登录页
  loginPage: '/package1/pages/login/index'
}

export function interceptRoute() {
  // h5路由拦截，用于拦截用户地址栏输入地址
  const h5LocationUrl = window.location.href.split('/#')[1]
  const miniLocationUrl = window.location.pathname
  const locationUrl = process.env.TARO_ENV === 'h5' ? h5LocationUrl : miniLocationUrl
  console.log('locationUrl', process.env.TARO_ENV, locationUrl)
  // if (!config.whiteList.includes(locationUrl) && !getToken()) {
  if (config.authPages.includes(locationUrl) && !getToken()) {
    Taro.navigateTo({ url: config.loginPage })
  }

  // Taro跳转页面路由拦截器
  // const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']
  // list.forEach(item => {
  //   // 用遍历的方式分别为Taro.navigateTo, Taro.redirectTo, Taro.reLaunch, Taro.switchTab 这4个路由方法添加拦截器
  //   Taro.addInterceptor(item, {
  //     invoke(options) {
  //       console.log('options', options)
  //       if (options.from === 'backbutton') return true
  //       if (!config.needLogin) return true
  //       // 调用前拦截
  //       const url = options.url.split('?')[0] //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
  //       const notNeedLogin = config.whiteList.includes(url)
  //       // 如果在whiteList里面就不需要登录
  //       if (notNeedLogin) return true
  //       if (!getToken()) {
  //         Taro.navigateTo({ url: config.loginPage }) // 跳转到登录页
  //         return false
  //       }
  //       return true
  //     },
  //     success(res) {
  //       // console.log('success:', res)
  //     },
  //     fail(err) {
  //       // 失败回调拦截
  //       console.log('fail', err)
  //     }
  //   })
  // })
}
