import type { RehypePlugin } from '.'
import { visit } from 'unist-util-visit'

const rehypeImageLazyLoad: RehypePlugin = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type == 'element' && node.tagName == 'img') {
        node.properties['class'] += ' lazyload'
        node.properties['data-src'] = node.properties['src']
        node.properties['src'] = ''
      }
    })
  }
}

export default [
  rehypeImageLazyLoad
]