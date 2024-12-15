const BASE_URL = 'https://antares.coderxi.com'
const SITE_INFO = {
  title: 'Antares',
  author: '汐涌及岸',
  language: 'zh-CN',
  description: 'A blog template based on Astro',
  startYear: 2024,
  endYear: new Date().getFullYear(),
  email: 'coderxi@qq.com',
  baseUrl: BASE_URL,
  avatarUrl: BASE_URL + '/avatar.png',
}
const DEFAULT_FRONTMATTER = {
  titleIcon: 'asset:feather,#4c4948|asset:feather,#c9c9d7',
  titleColor: '#4c4948|#c9c9d7',
  description: '暂无描述.',
  categories: ['未分类'],
}

//======================================
import moment from 'moment'
moment.locale(SITE_INFO.language)
export { BASE_URL, SITE_INFO, DEFAULT_FRONTMATTER }
