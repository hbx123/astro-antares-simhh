---
top: 2
title: 'Antares 文档'
titleIcon: '/favicon.svg'
titleColor: '#0998DF'
tags: [ Astro, 'TagD' ]
categories: [ 'Astro', 'Demo' ]
description: |
  Learn why Antares and how to get start.  
  为什么是Antares以及如何开始.
---

# 简单的Page

## 快速创建Page页面

### .astro

```astro title=src/pages/archives.astro
---
import PageLayout from "@/layouts/PageLayout.astro";
import PostListSimple from '@/components/PostListSimple.astro'
import posts from '@/content/posts'
---

<PageLayout title="归档" titleIcon="mdi:archive" asideCards={['CardRecentPost','CardCategroies','CardTagCloud']}>
  <PostListSimple posts={posts}/>
</PageLayout>
```
### .mdx
```mdx title=src/pages/archives.mdx
---
layout: '@/layouts/PageLayout.astro'
asideCards: 
  - CardRecentPost
  - CardCategroies
  - CardTagCloud
title: '归档'
titleIcon: 'mdi:archive'
---

import posts from '@/content/posts'
import PostListSimple from '@/components/PostListSimple.astro'

<PostListSimple posts={posts}/>
```

# 简单的Post

## Post Frontmatter

Frontmatter 是 markdown 文件最上方以 `---` 分隔的区域，用于指定个别档案的变数。

```yaml
---
top: 2                          #[可选]置顶 (数字越大越靠前)
title: 'Antares 文档'           #[必需]标题
titleIcon: '/favicon.svg'       #[可选]标题图标
titleColor: '#0998DF'           #[可选]标题渐变颜色
publishDate: '2024-12-19'       #[可选]发布时间 (默认使用文件创建时间)
updatedDate: '2024-12-19'       #[可选]更新时间 (默认使用文件修改时间)
tags: [ Astro, 'TagD' ]         #[可选]标签
categories: [ 'Astro', 'Demo' ] #[可选]分类
description: '暂无描述.'         #[可选]文章描述
---

文章内容...
```

## RemarkDirective Widgets

[RemarkDirective](https://github.com/remarkjs/remark-directive)是一款支持将`:` `::` `:::`格式包裹的文本进行处理的remark插件

```
:::note{type=info}
This is a info note.
:::
```

:::note{type=info}
This is a info note.
:::