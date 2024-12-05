<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <nut-button type="primary" @click="onClick">按钮</nut-button>
    <nut-toast v-model:visible="show" msg="你成功了" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')

const show = ref(false)
const onClick = () => {
  show.value = true
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200px;
  width: 200px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36px;
  color: #8f8f94;
}
</style>
