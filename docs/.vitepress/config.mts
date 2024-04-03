import { defineConfig } from 'vitepress'

// 1.导入navbar
import { navbarConfig } from '../config/navbar.js'; // 导入导航菜单配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝胖子",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/avatar.webp',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav:navbarConfig,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
