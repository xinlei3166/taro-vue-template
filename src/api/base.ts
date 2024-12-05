import Taro from '@tarojs/taro'
import { useRequests } from '@packages/lib'
import { removeToken } from '@packages/utils'
import { useUserStore } from '@/store/user'

const errorHandler = (msg: string) => {
  const userStore = useUserStore()
  removeToken()
  userStore.cleanup()
  Taro.hideToast()
  Taro.showToast({ title: msg })
  setTimeout(() => {
    Taro.navigateTo({ url: '/package1/pages/login/index' })
  }, 50)
}

const baseURL = process.env.TARO_APP_API_URL
export const requests = useRequests({ baseURL, errorHandler })
