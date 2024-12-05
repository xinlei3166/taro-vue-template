<template>
  <view class="message-page">
    <!--background="linear-gradient(to right, #9866F0, #EB4D50)"-->
    <nut-searchbar
      v-model="search.keyword"
      class="message-search"
      shape="round"
      placeholder="请输入搜索关键词"
    ></nut-searchbar>
    <view class="message-page-list flex flex-col">
      <view
        v-for="(item, index) in data"
        :key="index"
        class="message-page-list-item flex items-center"
      >
        <view class="message-page-list-item-left flex-shrink-0">
          <view class="icon-wrap">
            <IconFont class="icon" size="28" color="#fff" name="star-n" />
          </view>
        </view>
        <view class="message-page-list-item-right flex flex-1 flex-col justify-between">
          <view class="message-page-list-item-title flex justify-between">
            <!--<text class="message-page-list-item-title-text">生活号</text>-->
            <text>生活号</text>
            <text class="message-page-list-item-title-time">18:15</text>
          </view>
          <view class="message-page-list-item-msg">了不起的打工人</view>
        </view>
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

<style lang="scss">
.message-page {
  .message-search {
    margin-bottom: 24px;
  }

  .message-page-list {
    //padding-bottom: 100px;
  }

  .message-page-list-item {
    margin: 0 0 24px 0;
    padding: 12px 24px;
    background: #fff;
    //&:first-of-type {
    //  margin-top: 32px;
    //}
  }

  .message-page-list-item-left {
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

  .message-page-list-item-right {
    padding: 8px 0;
    .message-page-list-item-title {
      margin-bottom: 16px;
      text:first-of-type {
        font-size: 32px;
      }
    }
    .message-page-list-item-title-text {
      font-size: 32px;
    }
    .message-page-list-item-title-time,
    .message-page-list-item-msg {
      font-size: 24px;
      color: $text-color-2;
    }
  }
}
</style>
