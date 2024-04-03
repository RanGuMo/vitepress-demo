import { defineConfig } from 'vitepress'

// 1.导入navbar
import { navbarConfig } from '../config/navbar.js'; // 导入导航菜单配置
// 2.导入sidebar
import { sidebarConfig } from '../config/sidebar.js'; // 导入侧边栏配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝胖子",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    logo: '/avatar.webp',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav:navbarConfig,

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
