import Taro from '@tarojs/taro'

export const storage = {
  getItem: Taro.getStorageSync,
  setItem: Taro.setStorageSync
}
