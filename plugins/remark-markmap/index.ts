import { importRaw } from '../utils';
import type { RemarkPlugin } from '@astrojs/markdown-remark'
import { visit } from 'unist-util-visit'
import { Transformer } from 'markmap-lib';
import { foldRoot, stringifyRoot } from './utils';
const markmapInitJsTxt = importRaw('plugins/remark-markmap/template/markmap-init.js')
const markmapCss = importRaw('plugins/remark-markmap/template/markmap.css')

const transformer = new Transformer();

const remarkMarkmap: RemarkPlugin = () => (tree, _) => {
  let markmapCount = 0
  visit(tree, ['code'], (node, index, parent) => {
    if (!(
      node.type === 'code' &&
      node.lang && ['md', 'markdown'].includes(node.lang) &&
      node.meta && node.meta.startsWith('markmap')
    )) return
    
    // Get params
    const markmapText = node.value
    const paramsText = node.meta.slice('markmap'.length).trim()
    const paramsObject = Object.fromEntries(paramsText.split(/\s+/).map((s) => s.split('=', 2)))
    const params = {
      height: String(paramsObject['height']),
      depth: parseInt(paramsObject['depth']),
    }

    // Render
    const { root } = transformer.transform(markmapText);
    if (params.depth) {
      foldRoot(root, params.depth)
    }

    // Replace node
    parent!.children.splice(index!, 1, {
      type: 'html',
      value: `<div class="markmap-wrap" style="height:${params.height}" data="${stringifyRoot(root)}"><svg></svg></div>`,
    })

    markmapCount++
  })

  markmapCount && tree.children.push({
    type: 'html',
    value: 
      `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>` +
      `<script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>` +
      `<style>${markmapCss}</style>` + 
      `<script>(function(){${markmapInitJsTxt}})();</script>`
  })
}
export default remarkMarkmap
