<template>
  <view class="home-page-list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="home-page-list-item flex">
      <view class="home-page-list-item-left">
        <image class="home-page-list-item-img" src="@/static/img/ipad.jpeg" />
      </view>
      <view class="home-page-list-item-right flex flex-col justify-between">
        <view class="home-page-list-item-title">这是一个{{ tab }}的标题</view>
        <view class="home-page-list-item-desc">这是一段描述</view>
        <view>
          <nut-tag color="#969799" class="home-page-list-item-tag" plain round>标签</nut-tag>
          <nut-tag color="#969799" class="home-page-list-item-tag" plain round>标签</nut-tag>
          <nut-tag color="#969799" class="home-page-list-item-tag" plain round>标签</nut-tag>
        </view>
        <view>
          <text class="home-page-list-item-price">0.3万/月</text>
          <text class="home-page-list-item-space">面积150平</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  data: { type: Array, default: () => [] },
  tab: { type: String, default: '' }
})
</script>

<style lang="scss">
.home-page-list {
  .home-page-list-item {
    margin: 0 32px 24px 32px;
    &:first-of-type {
      margin-top: 24px;
    }
  }

  .home-page-list-item-left {
    width: 180px;
    height: 200px;
    .home-page-list-item-img {
      //background: #fff;
      //padding: 24px;
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }

  .home-page-list-item-right {
    padding: 8px 24px;
    .home-page-list-item-title {
      font-size: 28px;
      font-weight: 500;
    }
    .home-page-list-item-desc {
      font-size: 24px;
      color: $text-color-2;
    }
    .home-page-list-item-tag + .home-page-list-item-tag {
      margin-left: 12px;
    }
    .home-page-list-item-price {
      margin-right: 16px;
      color: $danger-color;
    }
    .home-page-list-item-space {
      color: $text-color-2;
    }
    .home-page-list-item-price,
    .home-page-list-item-space {
      font-size: 26px;
      font-weight: 500;
    }
  }
}
</style>
