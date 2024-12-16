// Extend RemarkPlugin types
import type { RemarkPlugin as _RemarkPlugin } from '@astrojs/markdown-remark'
type RemarkPluginFn = Extract<_RemarkPlugin, Function>
type NonNullRemarkPluginFn = Extract<NonNullable<ReturnType<RemarkPluginFn>>, Function>
type PluginParams = Parameters<NonNullRemarkPluginFn>
type PluginReturn = ReturnType<NonNullRemarkPluginFn>
type _VFile = PluginParams[1]
type VFile<T extends Record<string, any>> = { data: { astro: { frontmatter: T } } } & _VFile
type RemarkPlugin<T extends Record<string, any> = Record<string, never>> = (...args: Parameters<RemarkPluginFn>) => (tree: PluginParams[0], file: VFile<T>, next: PluginParams[2]) => PluginReturn

// Extend RehypePlugin types
import type { RehypePlugin } from '@astrojs/markdown-remark';

// Export values
import * as _remarkPlugins from './remarkPlugins'
const remarkPlugins = Object.values(_remarkPlugins)! as _RemarkPlugin[]

import * as _rehypePlugins from './rehypePlugins'
const rehypePlugins = Object.values(_rehypePlugins)! as RehypePlugin[]

// Export
export {
  type RemarkPlugin,
  type RehypePlugin,
  remarkPlugins,
  rehypePlugins
}
