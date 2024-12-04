<template>
  <view class="list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="list-item flex">
      <view class="list-item-left">
        <image class="list-item-img" src="@/static/img/ipad.jpeg" />
      </view>
      <view class="list-item-right flex flex-col justify-between">
        <view class="list-item-title">这是一个{{ tab }}的标题</view>
        <view class="list-item-desc">这是一段描述</view>
        <view>
          <nut-tag color="#969799" class="list-item-tag" plain round>标签</nut-tag>
          <nut-tag color="#969799" class="list-item-tag" plain round>标签</nut-tag>
          <nut-tag color="#969799" class="list-item-tag" plain round>标签</nut-tag>
        </view>
        <view>
          <text class="list-item-price">0.3万/月</text>
          <text class="list-item-space">面积150平</text>
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

<style lang="scss" scoped>
.list {
  //
}

.list-item {
  margin: 0 32px 24px 32px;
  &:first-of-type {
    margin-top: 24px;
  }
}

.list-item-left {
  width: 180px;
  height: 200px;
  .list-item-img {
    //background: #fff;
    //padding: 24px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
}

.list-item-right {
  padding: 8px 24px;
  .list-item-title {
    font-size: 28px;
    font-weight: 500;
  }
  .list-item-desc {
    font-size: 24px;
    color: $text-color-2;
  }
  .list-item-tag + .list-item-tag {
    margin-left: 12px;
  }
  .list-item-price {
    margin-right: 16px;
    color: $danger-color;
  }
  .list-item-space {
    color: $text-color-2;
  }
  .list-item-price,
  .list-item-space {
    font-size: 26px;
    font-weight: 500;
  }
}
</style>
