import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'

const storageKeyPrefix = process.env.TARO_APP_STORAGE_KEY_PREFIX
export const TokenKey = `${storageKeyPrefix}Token`

export const setToken = (token: string) => Taro.setStorageSync(TokenKey, token) // { expires: 1 }
export const getToken = () => Taro.getStorageSync(TokenKey)
export const removeToken = () => {
  Taro.removeStorageSync(TokenKey)
  Taro.removeStorageSync(RefreshTokenKey)
}

export const RefreshTokenKey = `${storageKeyPrefix}RefreshToken`
export const setRefreshToken = (token: string) => Taro.setStorageSync(RefreshTokenKey, token) // { expires: 1 }
export const getRefreshToken = () => Taro.getStorageSync(RefreshTokenKey)

export const setLocalValue = (key: string, value: any, stringify = false) => {
  let val = value
  if (val && stringify) {
    val = JSON.stringify(val)
  }
  Taro.setStorageSync(`${storageKeyPrefix}${key}`, val)
}
export const getLocalValue = (key: string, parse = false) => {
  let val = Taro.getStorageSync(`${storageKeyPrefix}${key}`)
  if (val && parse) {
    val = JSON.parse(val as string)
  }
  return val
}
export const removeLocalValue = (key: string) => {
  return Taro.removeStorageSync(`${storageKeyPrefix}${key}`)
}

// logout
export const logoutCleanup = () => {
  const userStore = useUserStore()
  removeToken()
  Taro.navigateTo({ url: '/package1/pages/login/index' })
  userStore.cleanup()
}
