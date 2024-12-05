<template>
  <view class="card">
    <view class="title">{{ title }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = process.env.TARO_APP_TITLE
</script>

<style lang="scss">
.card {
  padding: 20px;
  background: #fff;
}
</style>
