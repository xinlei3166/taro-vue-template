<template>
  <view class="my-page">
    <view class="avatar-info">
      <view class="title-setting flex items-center justify-between">
        <text>我的</text>
        <IconFont class="title-setting-icon" size="22" name="setting" />
      </view>
      <view class="flex items-center">
        <nut-avatar class="avatar-info-image" size="large">
          <image class="w-full h-full" src="@/static/img/avatar.png" />
        </nut-avatar>
        <view class="username-phone">
          <view class="username">{{ userinfo.name || '君惜' }}</view>
          <view class="phone">{{ hiddenPhone(userinfo.phone) || '188******88' }}</view>
        </view>
        <IconFont class="text-white ml-auto" name="right" size="14" />
      </view>
    </view>
    <nut-cell-group class="nav-menu">
      <nut-cell
        icon="home"
        title="Router"
        @click="onClickMenu('/package1/pages/components/router/index')"
      >
        <template #icon>
          <IconFont name="home" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="edit"
        title="Store"
        @click="onClickMenu('/package1/pages/components/store/index')"
      >
        <template #icon>
          <IconFont name="edit" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="star-n"
        title="Provide"
        @click="onClickMenu('/package1/pages/components/provide/index')"
      >
        <template #icon>
          <IconFont name="star-n" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="success"
        title="Bus"
        @click="onClickMenu('/package1/pages/components/bus/index')"
      >
        <template #icon>
          <IconFont name="success" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="date"
        title="Table"
        @click="onClickMenu('/package1/pages/components/table/index')"
      >
        <template #icon>
          <IconFont name="date" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="category"
        title="Sortable"
        @click="onClickMenu('/package1/pages/components/sortable/index')"
      >
        <template #icon>
          <IconFont name="category" class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group class="nav-menu">
      <nut-cell icon="setting" title="Security Settings" is-link>
        <template #icon>
          <IconFont name="setting" class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell icon="message" title="Notification Settings" is-link>
        <template #icon>
          <IconFont name="message" class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group class="nav-menu">
      <nut-cell icon="my" title="Logout" @click="onLogout">
        <template #icon>
          <IconFont name="my" class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
  </view>
</template>

<script setup lang="ts">
import Taro, { useDidShow } from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue-taro'
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import { removeToken, hiddenPhone } from '@packages/utils'
import { logout } from '@/api'

useDidShow(() => {
  console.log('My Show')
})

const userStore = useUserStore()
const userinfo = computed(() => userStore.Userinfo)

const onClickMenu = (path: string) => {
  Taro.navigateTo({ url: path })
}

const onLogout = async () => {
  const res = await logout()
  if (!res || res.code !== 0) return
  Taro.showToast({ title: '退出登录成功' })
  Taro.navigateTo({ url: '/package1/pages/login/index' })
  removeToken()
  userStore.cleanup()
}
</script>

<style lang="scss">
.my-page {
  .avatar-info {
    padding: 0 32px;
    height: 240px;
    background: $primary-color;
  }

  .avatar-info-image {
    --nut-avatar-large-width: 100px;
    --nut-avatar-large-height: 100px;
  }

  .title-setting {
    height: 108px;
    font-size: 32px;
    color: #fff;
  }

  .username-phone {
    margin-left: 24px;
    .username {
      font-weight: 500;
      font-size: 32px;
      line-height: 44px;
      color: #fff;
    }
    .phone {
      margin-top: 2px;
      font-size: 24px;
      line-height: 36px;
      color: #dcdee0;
    }
  }

  .nav-menu {
    margin: 24px !important;
  }
}
</style>
