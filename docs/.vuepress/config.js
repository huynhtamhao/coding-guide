const path = require("path");
const config = require("./configs/index")

module.exports = {
  title: 'Fanatic Documentation',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  alias: {
    '@assets': path.resolve(__dirname, "../assets"),
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/plugin-search',
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    ['vuepress-plugin-right-anchor', {
      showDepth: 2,
      ignore: [
        '/'
      ],
      expand: {
        trigger: 'click',
        clickModeDefaultOpen: true
      },
      customClass: 'toc-right-anchor',
    }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/jp/': {
      lang: 'ja-JP',
      title: 'ファナティック資料'
    },
  },
  themeConfig: {
    logo: 'favicon.png',
    contributors: false,
    locales: {
      '/': {
        selectLanguageText: '🌐 Languages',
        selectLanguageName: '🇺🇸 English',
        navbar: [
          { text: '🏠 Home', link: '/', icon: 'home' },
          { text: '🖥️ Guide', link: '/guide/' },
        ],
        sidebar: config.sidebar.en,
        // 404 page
        notFound: ["Page Not Found !!!"],
      },
      '/jp/': {
        selectLanguageText: '🌐 言語',
        selectLanguageName: '🇯🇵 日本語',
        navbar: [
          { text: '🏠 ホームページ', link: '/jp/' },
          { text: '🖥️ コーディング手引書', link: '/jp/guide/' },
        ],
        sidebar: config.sidebar.jp,
        // 404 page
        notFound: ["そのページは存在しません。"],
        backToHome: "ホームページ",
      }
    }
  }
}
