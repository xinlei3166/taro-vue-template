export default {
  pages: [
    'pages/home/index',
    'pages/news/index',
    'pages/message/index',
    'pages/my/index',
    'pages/login/index',
    'pages/register/index',
    'pages/components/router/index',
    'pages/components/store/index',
    'pages/components/bus/index',
    'pages/components/provide/index',
    'pages/components/table/index',
    'pages/components/sortable/index'
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#0077FA',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './static/icon/home.png',
        selectedIconPath: './static/icon/home-hl.png'
      },
      {
        pagePath: 'pages/news/index',
        text: '咨讯',
        iconPath: './static/icon/fund.png',
        selectedIconPath: './static/icon/fund-hl.png'
      },
      {
        pagePath: 'pages/message/index',
        text: '消息',
        iconPath: './static/icon/message.png',
        selectedIconPath: './static/icon/message-hl.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './static/icon/user.png',
        selectedIconPath: './static/icon/user-hl.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'default'
  }
}
