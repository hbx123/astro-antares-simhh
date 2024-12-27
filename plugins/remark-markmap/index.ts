import type { RemarkPlugin } from '@astrojs/markdown-remark'
import { visit } from 'unist-util-visit'
import { persistCSS, persistJS } from 'markmap-common'
import { Transformer } from 'markmap-lib';
import markmapInit from './markmap-init';

const transformer = new Transformer();

const remarkMarkmap: RemarkPlugin = () => (tree, _) => {
  let markmapCount = 0
  let assetsHtmls: string[] = []
  visit(tree, ['code'], (node, index, parent) => {
    if (!(node.type === 'code' && node.lang === 'markmap' )) return
    
    // Get params
    const markmapText = node.value
    const paramsText = node.meta || ''
    const paramsObject = Object.fromEntries(paramsText.split(/\s+/).map((s) => s.split('=', 2)))
    const params = {
      height: paramsObject['height'] as string,
      width: paramsObject['width'] as string,
    }

    // Render
    const { root, features } = transformer.transform(markmapText);
    const { styles=[], scripts=[] } = transformer.getUsedAssets(features)
    const context = {
      getMarkmap: () => window.markmap,
      root,
    }
    assetsHtmls.push(
      ...persistCSS(styles),
      ...persistJS(scripts, context)
    )

    // Replace node
    parent!.children.splice(index!, 1, {
      type: 'html',
      value: `<div class="markmap-wrap" style="height:${params.height??'400px'};width:${params.width??'100%'}">` +
                `<script type="application/json">${JSON.stringify(root)}</script>` +
              `</div>`,
    })

    // Count Increment
    markmapCount++
  })

  markmapCount && tree.children.push({
    type: 'html',
    value: [
      `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/markmap-toolbar"></script>`,
      ...new Set(assetsHtmls),
      `<style>.markmap-wrap{position:relative;}.markmap-wrap>svg{width:100%;height:100%;}</style>`,
      `<script>(${markmapInit.toString()})();</script>`,
    ].join('')
  })
}
export default remarkMarkmap
