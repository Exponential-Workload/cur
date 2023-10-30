import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cursor Moment',
  description: 'Improved Site Cursors',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/installing' },
    ],

    sidebar: [
      {
        text: 'Usage',
        items: [
          { text: 'Usage', link: '/installing' },
          { text: 'Download SVGs', link: '/download-svg' },
        ],
      },
      {
        text: 'Attribution',
        items: [
          { text: 'Attribution', link: '/attribution' },
          { text: 'License', link: '/LICENSE' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Exponential-Workload/cur' },
    ],
  },
});
