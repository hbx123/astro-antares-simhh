// Remark plugins
import remarkDirective from 'remark-directive'
import remarkDirectiveWidgets from './remark-directive-widgets'
export const remarkPlugins = [
  remarkDirective,
  remarkDirectiveWidgets
]

// Rehype plugins
import rehypeImageLazyLoad from './rehype-image-lazyload'
export const rehypePlugins = [
  rehypeImageLazyLoad
]