import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'

const storageKeyPrefix = process.env.TARO_APP_STORAGE_KEY_PREFIX
export const TokenKey = `${storageKeyPrefix}Token`

export const setToken = (token: string) => Taro.setStorageSync(TokenKey, token) // { expires: 1 }
export const getToken = () => Taro.getStorageSync(TokenKey)
export const removeToken = () => {
  Taro.removeStorageSync(TokenKey)
}

// logout
export const logoutCleanup = () => {
  const userStore = useUserStore()
  removeToken()
  Taro.navigateTo({ url: '/pages/login/index' })
  userStore.cleanup()
}
