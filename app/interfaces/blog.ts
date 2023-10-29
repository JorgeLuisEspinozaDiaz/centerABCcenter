import { MetaSEO, Picture } from './shared'

export interface BlogPost {
   data: BlogPostData[]
   meta: BlogPostMeta
}

export interface BlogPostData {
   id: number
   title: string
   date: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   slug: string
   content: string
   image: Picture
   seo: MetaSEO
}

export interface BlogPostMeta {}
