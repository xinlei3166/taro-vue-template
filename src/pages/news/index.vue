<template>
  <view class="news-page-list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="news-page-list-item flex">
      <view class="news-page-list-item-left flex-shrink-0">
        <image class="news-page-list-item-img" :src="apple1" />
      </view>
      <view class="news-page-list-item-right flex flex-col justify-between">
        <view class="news-page-list-item-title">
          ChatGPT是一个大型语言模型聊天机器人，它具有惊人的对话交互能力，可以提供看似非常人性化的回复。
        </view>
        <view class="news-page-list-item-category-time">
          <text class="news-page-list-item-category">热门资讯</text>
          <text>2023-04-03 18:15</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import apple1 from '@/static/img/apple-1.jpeg'

const data = Array.from({ length: 20 })
</script>

<style lang="scss">
.news-page-list {
  //padding-bottom: 100px;

  .news-page-list-item {
    margin: 0 0 24px 0;
    padding: 12px 24px;
    background: #fff;
    //&:first-of-type {
    //  margin-top: 32px;
    //}
  }

  .news-page-list-item-left {
    width: 240px;
    height: 160px;
    margin-right: 64px;
    .news-page-list-item-img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }

  .news-page-list-item-right {
    padding: 8px 0;
    .news-page-list-item-title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .news-page-list-item-category-time {
      font-size: 24px;
      color: $text-color-2;
    }
    .news-page-list-item-category {
      margin-right: 20px;
    }
  }
}
</style>
