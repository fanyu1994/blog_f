module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      },

      {
        text: '配置',
        link: '/guide/'
      },

    ],
    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'ES6',
        link: '/high-ctx',
        children: [
          {
            text: '高质量内容1',
            link: '/high-ctx/test1.html',
          },
          {
            text: '高质量内容222',
            link: '/high-ctx/test2.html',
          }
        ]
      },
      {
        text: 'ES7',
        link: '/high-ctx',
        children: [
          {
            text: '高质量内容1',
            link: '/high-ctx/test1.html',
          },
          {
            text: '高质量内容2',
            link: '/high-ctx/test2.html',
          }
        ]
      }
    ]
  },
}