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

// 刷新令牌
const pureRequests = useRequests({ baseURL, errorHandler, noRefreshToken: true })
export const refreshTokenApi = (data?: Request) =>
  pureRequests.post('/user/refresh_token', { refresh_token: data?.refreshToken })

export const requests = useRequests({ baseURL, errorHandler, refreshTokenApi })
