module.exports = {
  base:'/doc/manyi-cli/',
  dest:'docs/.vuepress/manyi-cli',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  title: 'manyi-cli 使用文档',
  description: '前端项目脚手架',
  port: 9090,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduce' },
      { text: '命令参考', link: '/config/api' },
      { text: 'Gihub', link: 'https://github.com/manyi8634/manyi-cli' },
    ],
    sidebar: {
      '/guide/': [
        'introduce',
        'warn'
      ],
      '/config/': [
        'api'
      ]
    }
  }
}