import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import unocss from 'unocss/astro'
import { BASE_URL } from './src/config'
import remarkDirective from 'remark-directive'
import { remarkPlugins, rehypePlugins } from './src/plugins';

// https://astro.build/config
export default defineConfig({
	site: BASE_URL,
	integrations: [
    mdx(),
    sitemap({ filter: page => ['/tags/','/categories/'].map(PATH=>page.startsWith(BASE_URL+PATH)).includes(false) }),
    unocss({ injectReset: true, configFile: '/uno.config.ts' }),
  ],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      ...remarkPlugins
    ],
    rehypePlugins: [
      ...rehypePlugins
    ]
  }
});
