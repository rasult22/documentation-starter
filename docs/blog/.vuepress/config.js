const path = require('path');
const { description } = require('../../package')

module.exports = {
  theme: '@vuepress/blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '👨🏻 Freakin Dev',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        title: 'Статьи',
        path: '/posts/'
        // itemPermalink: "/posts/:year/:month/:day/:slug"
      },
    ],
    // feed: {
    //   canonical_base: 'http://localhost:8080/',
    //   posts_directories: ['/_posts/']
    // },
    footer: {
      contact: [
        {
          type: 'instagram',
          link: 'https://instagram.com/rasyokin'
        },
        {
          type: 'github',
          link: 'https://github.com/rasult22'
        },
      ],
      copyright: [
        {
          text: 'Kazakhstan, Almaty',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'Copyright © 2021-present @rasult22',
        },
      ]
    },
    nav: [
      {
        text: 'Articles',
        link: '/posts/',
      },
    ],
  },
  alias: {
    "@assets": path.resolve(__dirname, "../assets")
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress'
  ]
}
