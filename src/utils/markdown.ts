import sanitizeHtml from 'sanitize-html'
import astroConfig from 'astro.config.mjs'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'

const processor = await createMarkdownProcessor({
  syntaxHighlight: false,
  remarkPlugins: astroConfig.markdown?.remarkPlugins,
})

export const markdown2html = async (markdown: string) => {
  const html = (await processor.render(markdown)).code
  return sanitizeHtml(html)
}
