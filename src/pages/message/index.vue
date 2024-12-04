<template>
  <!--background="linear-gradient(to right, #9866F0, #EB4D50)"-->
  <nut-searchbar
    v-model="search.keyword"
    class="message-search"
    shape="round"
    placeholder="请输入搜索关键词"
  ></nut-searchbar>
  <view class="list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="list-item flex items-center">
      <view class="list-item-left flex-shrink-0">
        <view class="icon-wrap">
          <IconFont class="icon" size="28" color="#fff" name="star-n" />
        </view>
      </view>
      <view class="list-item-right flex flex-1 flex-col justify-between">
        <view class="list-item-title flex justify-between">
          <text class="list-item-title-text">生活号</text>
          <text class="list-item-title-time">18:15</text>
        </view>
        <view class="list-item-msg">了不起的打工人</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'

const data = Array.from({ length: 20 })
const search = reactive<Record<string, any>>({
  keyword: ''
})
</script>

<style lang="scss" scoped>
.message-search {
  margin-bottom: 24px;
}

.list {
  //padding-bottom: 100px;
}

.list-item {
  margin: 0 0 24px 0;
  padding: 12px 24px;
  background: #fff;
  //&:first-of-type {
  //  margin-top: 32px;
  //}
}

.list-item-left {
  margin-right: 24px;
  .icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    border-radius: 15%;
    background: #60a5fa;
  }
  .icon {
    font-size: 56px;
    color: #fff;
  }
}

.list-item-right {
  padding: 8px 0;
  .list-item-title {
    margin-bottom: 16px;
  }
  .list-item-title-text {
    font-size: 32px;
  }
  .list-item-title-time,
  .list-item-msg {
    font-size: 24px;
    color: $text-color-2;
  }
}
</style>
