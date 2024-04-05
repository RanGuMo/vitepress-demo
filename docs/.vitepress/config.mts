import { defineConfig } from "vitepress";

// 1.导入navbar
import { navbarConfig } from "../config/navbar.js"; // 导入导航菜单配置
// 2.导入sidebar
import { sidebarConfig } from "../config/sidebar.js"; // 导入侧边栏配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝胖子",
  description: "A VitePress Site",
  lastUpdated: true, //最后更新时间 全局开启
  themeConfig: {
    logo: "/avatar.webp",
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav: navbarConfig,

    sidebar: sidebarConfig,

    outline: {
      level: [2, 6], //目前锚点导航只能配置h2-h6级的标题，h1标题暂时不能配置
      label: "目录",
    },
    // 配置搜索
    search: {
      provider: "local",
    },
    // 国际化i18n
    i18nRouting: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
