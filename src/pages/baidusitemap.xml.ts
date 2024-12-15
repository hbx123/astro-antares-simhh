import type { APIContext } from 'astro';
import type { Post } from '@/content/posts';
import type { XMLBuilder } from 'xmlbuilder2/lib/interfaces';
import posts from '@/content/posts';
import { create } from 'xmlbuilder2';

export const GET = async (context: APIContext) => {
  const BASE_URL = context.site!.origin;
  const sitemap = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', { 'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'xmlns:mobile': 'http://www.baidu.com/schemas/sitemap-mobile/1/' });
  posts.forEach(post => {
    const element = sitemap.ele('url')
    element.ele('loc').txt(BASE_URL + '/posts/' + post.id);
    element.ele('lastmod').txt(post.data.publishDate!.toISOString());
  })
  const xml = sitemap.end({ prettyPrint: true })
  return new Response(xml, { headers: { 'Content-Type': 'application/xml', } })
}


