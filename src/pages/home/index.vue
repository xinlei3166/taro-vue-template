<template>
  <nut-swiper
    class="my-swiper"
    :init-page="1"
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="3000"
  >
    <nut-swiper-item>明心见性</nut-swiper-item>
    <nut-swiper-item>学习思考</nut-swiper-item>
    <nut-swiper-item>坚持不懈</nut-swiper-item>
    <nut-swiper-item>收放自如</nut-swiper-item>
  </nut-swiper>
  <Menu class="my-menu" />
  <nut-tabs v-model="active" class="tabs">
    <nut-tab-pane class="tab-pane" title="热门推荐" pane-key="1">
      <List tab="热门推荐" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane class="tab-pane" title="时尚流行" pane-key="2">
      <List tab="时尚流行" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane class="tab-pane" title="经典怀旧" pane-key="3">
      <List tab="经典怀旧" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane class="tab-pane" title="其他类型" pane-key="4">
      <List tab="其他类型" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
  </nut-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import List from './List.vue'

const active = ref('1')
</script>

<style lang="scss">
@import '@packages/styles/theme.scss';

.my-swiper {
  .nut-swiper-inner {
    min-height: 300px;
  }
  .nut-swiper-item {
    color: #fff;
    font-size: 32px;
    line-height: 300px;
    text-align: center;
    background-color: $primary-color;
  }
}

.tabs {
  margin-top: 24px;
  .tab-pane {
    padding: 0;
    background: $bg-color;
  }
}
</style>
