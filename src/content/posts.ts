import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import getReadingTime from 'reading-time';
import moment from 'moment';
import fs from 'fs'

type Post = CollectionEntry<'posts'> & { data: PostData }
type PostData = CollectionEntry<'posts'>['data'] & PostDataExtra
type PostDataExtra = {
  publishDateISOString: string,
  publishDateFormatString: string,
  readingTimeWords: number,
  readingTimeHumanizeText: string,
  categoriesItems: { depth: number; name: string; path: string; } []
}

const sort = (posts: Post[]) => posts.sort((postA,postB)=>postA.data.publishDate!.valueOf() - postB.data.publishDate!.valueOf())

const posts = sort(await Promise.all((await getCollection("posts") as Post[]).map(async post => {

  const fileStat = await fs.promises.stat(post.filePath!)
  post.data.publishDate = post.data.publishDate || fileStat.birthtime
  post.data.publishDateISOString = post.data.publishDate!.toISOString()
  post.data.publishDateFormatString = moment(post.data.publishDate!).format('yyyy-MM-DD')
  post.data.updatedDate = post.data.updatedDate || fileStat.mtime

  const readingTime = getReadingTime(post.body!)
  post.data.readingTimeWords = readingTime.words
  post.data.readingTimeHumanizeText = moment.duration(readingTime.time * 1.2).humanize();

  post.data.categoriesItems = post.data.categories.reduce((result, category, index) => {
    const categoryPath = result.length > 0 ? `${result[result.length - 1].path}/${category}` : `/${category}`;
    const categoryItem = { depth: index + 1, name: category, path: categoryPath };
    result.push(categoryItem);
    return result;
  }, [] as PostDataExtra['categoriesItems']);

  return post
})))

export default posts
export {
  sort,
  type Post
}