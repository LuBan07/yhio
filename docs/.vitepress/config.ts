import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)


export default defineConfig({
  lang: 'en-US',
  title: '🤐',
  description: '',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    [
      'script',
      {
        src: 'https://unpkg.com/valine/dist/Valine.min.js'
      }
    ]
  ],

  transformHead({ page }) {
    if (page === 'index.md') {
      return [
        ['link', { rel: 'preload', as: 'image', href: '/vue.svg' }],
        ['link', { rel: 'preload', as: 'image', href: '/vite.svg' }]
      ]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/flutter/': sidebarFlutter(),
    },

    editLink: {
      pattern: 'https://github.com/xiaoyi1255/xiaoyi1255.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoyi1255' }
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },

    algolia: {
      appId: 'IPEOGH904I',
      apiKey: '7001393f64b263b1fc44c1094b263008',
      indexName: 'xiaoyi1255io'
    },

    // carbonAds: {
      //   code: 'CEBDT27Y',
      //   placement: 'vuejsorg'
    // }
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/test', activeMatch: '/guide/' },
    ...sidebarFlutter(), // flutter
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Vue3源码学习',
      collapsed: true, // true:目录自动展开 [pc端生效]
      items: [
        { text: 'ref+依赖收集+更新', link: '/guide/vue/ref' },
        { text: 'reactive', link: '/guide/vue/reactive' },
        { text: 'computed', link: '/guide/vue/computed' },
        { text: 'effect', link: '/guide/vue/effect' },
        { text: '拦截工具函数', link: '/guide/vue/intercept' },
        { text: 'watch & watchEffect', link: '/guide/vue/watch' },
      ]
    },
    {
      text: '网络请求',
      collapsed: true,
      items: [
        { text: 'http缓存', link: '/guide/network/httpCache.md' },
        { text: 'service Worker缓存', link: '/guide/network/serviceWorker.md' },
        { text: 'axios 取消重复请求', link: '/guide/network/axios.md' },
        { text: '接口数据缓存', link: '/guide/network/dataCache.md' },
      ]
    },
    {
      text: '项目搭建',
      collapsed: true,
      items: [
        { text: 'vitepress搭建技术文档、个人博客', link: '/guide/project/blog' },
        { text: '给vitepress加上全局搜索', link: '/guide/project/algolia' },
        { text: 'nuxt3 搭建项目', link: '/guide/project/nuxt3' },
        { text: 'nodemailer实现邮件发送', link: '/guide/project/nodemailer' },
        { text: 'websoket实现及时通信',link: '/guide/websocket' },
        { text: '腾讯云服务器',link: '/guide/cloud' },
      ]
    },
    {
      text: '那些年踩过的坑',
      link: '/guide/bug', activeMatch: '/guide/'
    },
  ]
}

function sidebarFlutter() {
  return [
    {
      text: 'Dart基础语法',
      collapsed: true, // true:目录自动展开 [pc端生效]
      items: [
        { text: 'dart基础类型之num', link: '/flutter/num' },
        { text: 'dart基础类型之Sting', link: '/flutter/string' },
        { text: 'dart类型之List', link: '/flutter/List' },
        { text: 'dart类型之Map', link: '/flutter/Map' },
        { text: 'dart类型之Set', link: '/flutter/Set' },
        { text: 'dart之Class', link: '/flutter/Class' },
        { text: 'dart之Function', link: '/flutter/Function' },
      ]
    },
  ]
}