import Taro from '@tarojs/taro'
import { createApp } from 'vue'
import { useUserStore } from '@/store/user'
import { getToken, interceptRoute } from '@packages/utils'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import plugins from '@packages/plugins'
import '@packages/styles/index.scss'
import '@packages/styles/reset.scss'
import '@/styles/index.scss'
// import 'animate.css'
// import 'virtual:uno.css'
import 'uno.css'

import './app.scss'

dayjs.locale('zh-cn')

// process.env.TARO_ENV === 'weapp'
// {process.env.TARO_ENV === 'weapp' && <Component />}
// /*  #ifdef weapp  */ 模板代码 /*  #endif  */
const App = createApp({
  async mounted() {
    console.log('App Mounted')
    const token = getToken()
    if (!token) return
    const userStore = useUserStore()
    await userStore.setUserinfo()
  },
  beforeUnmount() {
    console.log('App Unmount')
  },
  onLaunch() {
    console.log('App Launch')
  },
  onShow(options: any) {
    console.log('App Show', options)
  },
  onHide() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const systemInfo = Taro.getSystemInfoSync?.()
console.log('systemInfo', systemInfo)
// if (process.env.TARO_APP_SHOW_VCONSOLE === 'true' && ['web'].includes(systemInfo?.platform)) {
//   import('vconsole').then((module: any) => {
//     new module.default()
//   })
// }
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
App.use(pinia)
App.use(plugins)
App.mixin({
  onShow() {
    interceptRoute()
  }
})

if (process.env.NODE_ENV === 'production') {
  App.config.errorHandler = (err, vm, info) => {
    console.group('vue_global_error')
    console.log('捕获到异常：', { err, vm, info })
    console.groupEnd()
  }

  // window.onerror = function (message, source, lineno, colno, error) {
  //   console.group('window_global_error')
  //   console.log('捕获到异常：', { message, source, lineno, colno, error })
  //   console.groupEnd()
  // }
}

export default App
