import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cursor Moment',
  description: 'Improved Site Cursors',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/svg/ico.svg',
    },
    footer: {
      message:
        'Released under the <a href="/LICENSE" style="color: var(--vp-c-brand-1);text-decoration: underline;">AGPL-3.0 License</a>, or at your discression, any later version.',
      copyright:
        'Copyright © 2023 <a href="https://codeberg.org/Expo" style="color: var(--vp-c-brand-1);text-decoration: underline;">Exponential-Workload</a>.',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/installing' },
    ],

    sidebar: [
      {
        text: 'Usage',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Installation', link: '/installing' },
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
