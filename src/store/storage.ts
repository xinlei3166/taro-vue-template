import Taro from '@tarojs/taro'

export const storage = {
  getItem: (key: string) => Taro.getStorageSync(key),
  setItem: (key: string, value: any) => Taro.setStorageSync(key, value),
  removeItem: (key: string) => Taro.removeStorageSync(key)
}
