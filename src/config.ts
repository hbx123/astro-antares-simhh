const FAVICON = '/favicon.svg'
const BASE_URL = 'https://antares.coderxi.com'
const SITE_INFO = {
  title: 'Antares',
  author: '汐涌及岸',
  language: 'zh-CN',
  description: 'A blog template based on Astro',
  startYear: 2024,
  endYear: new Date().getFullYear(),
  email: 'coderxi@qq.com',
  baseUrl: BASE_URL + '/',
  avatarUrl: BASE_URL + '/favicon.svg',
  siteshotUrl: BASE_URL + '/siteshot.png',
}
const POST_PGAE_SIZE = 5
const DEFAULT_FRONTMATTER = {
  titleIcon: 'asset:feather,#4c4948|asset:feather,#c9c9d7',
  titleColor: '#4c4948|#c9c9d7',
  description: '暂无描述.',
  categories: ['未分类'],
}
const ASIDE_CARDS = {
  info: {
    name: "Antares",
    link: '/',
    avatar: '/favicon.svg',
    descriptionLines: [
      "This is the Antares theme",
      "A blog template based on Astro",
    ]
  }
}
const NAV_ITEMS = [
  {
    icon: "mdi:home",
    text: "首页",
    href: "/"
  },
  {
    icon: "mdi:archive",
    text: "归档",
    href: "/archives",
    children: [
      {
        icon: "mdi:folder-open",
        text: "分类",
        href: "/categories"
      },
      {
        icon: "mdi:tag-multiple",
        text: "标签",
        href: "/tags"
      },
    ]
  },
  {
    icon: "mdi:account-multiple",
    text: "友链",
    href: "/links"
  },
  {
    icon: "mdi:account-box",
    text: "我的",
    href: "/about",
    children: [
      {
        icon: "mdi:account",
        text: "关于我",
        href: "/about"
      }
    ]
  }
]

const FOOTER = {
  badgeGroups: [
    [
      {
        label: '框架',
        message: `Astro ${dependencies().astro.slice(1)}`,
        labelColor: '#555',
        color: '#E374B9',
        logoBase64: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='white' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.16 3.16 0 0 1-1.407-1.188a3.3 3.3 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614s.57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z'/%3E%3C/svg%3E`,
        links: ['https://astro.build'],
        style: 'flat-square',
        idSuffix: '-badge-astro',
      },
      {
        label: '',
        message: 'RSS',
        labelColor: '#555',
        color: '#555',
        logoBase64: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='white' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24zM3.291 17.415a3.3 3.3 0 0 1 3.293 3.295A3.303 3.303 0 0 1 3.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295M15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91'/%3E%3C/svg%3E`,
        links: ['/rss.xml'],
        style: 'flat-square',
        idSuffix: '-badge-rss'
      },
      {
        label: '',
        message: 'ATOM',
        labelColor: '#555',
        color: '#555',
        logoBase64: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='white' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24zM3.291 17.415a3.3 3.3 0 0 1 3.293 3.295A3.303 3.303 0 0 1 3.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295M15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91'/%3E%3C/svg%3E`,
        links: ['/atom.xml'],
        style: 'flat-square',
        idSuffix: '-badge-atom'
      },
    ],
    [
      {
        label: '萌ICP备',
        message: `00000000号`,
        labelColor: '#555',
        color: '#FE1384',
        logoBase64: 'data:image/png;base64,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',
        links: ['https://icp.gov.moe', 'https://icp.gov.moe/?keyword=20210307'],
        style: 'flat-square',
        idSuffix: '-badge-moeicp'
      }
    ]
  ] satisfies Format[][]
}

export const FRIEND_LINK = {
  info: SITE_INFO,
  groups: (await import('./config.links')).default,
  siteshotPrefix: 'https://image.thum.io/get/width/400/crop/800/'
}

//======================================
import packageJson from '../package.json'
function dependencies() { return packageJson.dependencies }
import type { Format } from 'badge-maker'
import moment from 'moment'
moment.locale(SITE_INFO.language)
export { FAVICON, BASE_URL, SITE_INFO, POST_PGAE_SIZE, DEFAULT_FRONTMATTER, NAV_ITEMS, FOOTER, ASIDE_CARDS }
