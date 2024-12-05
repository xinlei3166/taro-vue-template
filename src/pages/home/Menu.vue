<template>
  <view class="home-page-menu-card flex flex-wrap">
    <view
      class="home-page-menu-card-menu-item flex flex-col items-center"
      @click="onClickMenu('/package1/pages/components/store/index')"
    >
      <view class="icon-wrap order1">
        <IconFont class="icon" size="21" color="#fff" name="edit" />
      </view>
      <text class="text">Store</text>
    </view>
    <view
      class="home-page-menu-card-menu-item flex flex-col items-center"
      @click="onClickMenu('/package1/pages/components/provide/index')"
    >
      <view class="icon-wrap order3">
        <IconFont class="icon" size="21" color="#fff" name="star-n" />
      </view>
      <text class="text">Provide</text>
    </view>
    <view
      class="home-page-menu-card-menu-item flex flex-col items-center"
      @click="onClickMenu('/package1/pages/components/bus/index')"
    >
      <view class="icon-wrap order2">
        <IconFont class="icon" size="21" color="#fff" name="success" />
      </view>
      <text class="text">Bus</text>
    </view>
    <view
      class="home-page-menu-card-menu-item flex flex-col items-center"
      @click="onClickMenu('/package1/pages/components/table/index')"
    >
      <view class="icon-wrap order4">
        <IconFont class="icon" size="21" color="#fff" name="date" />
      </view>
      <text class="text">Table</text>
    </view>
    <view
      class="home-page-menu-card-menu-item flex flex-col items-center"
      @click="onClickMenu('/package1/pages/components/sortable/index')"
    >
      <view class="icon-wrap order5">
        <IconFont class="icon" size="21" color="#fff" name="category" />
      </view>
      <text class="text">Sortable</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue-taro'

const onClickMenu = (path: string) => {
  Taro.navigateTo({ url: path })
}
</script>

<style lang="scss">
.home-page-menu-card {
  background: #fff;
  padding: 24px 0;
  //margin: -32px 32px 0 32px;
  //border-radius: 40px;
  //position: relative;

  .home-page-menu-card-menu-item {
    width: 20%;
    .icon-wrap.order1 {
      background: #f87171;
    }
    .icon-wrap.order2 {
      background: #fbbf24;
    }
    .icon-wrap.order3 {
      background: #34d399;
    }
    .icon-wrap.order4 {
      background: #60a5fa;
    }
    .icon-wrap.order5 {
      background: #818cf8;
    }
    .icon-wrap.order6 {
      background: #a78bfa;
    }
    .icon-wrap {
      border-radius: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
    }
    .icon {
      font-size: 42px !important;
      color: #fff !important;
    }
    .text {
      margin-top: 16px;
      font-size: 24px;
    }
  }
}
</style>
