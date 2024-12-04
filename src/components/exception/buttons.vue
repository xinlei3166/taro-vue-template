<template>
  <van-button type="primary" class="bottom-button" @click="onGoHome">返回首页</van-button>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'

const onGoHome = () => {
  Taro.navigateTo({ url: '/' })
}
</script>

<style lang="scss" scoped>
.bottom-button {
  width: 320px;
  height: 80px;
}
</style>
