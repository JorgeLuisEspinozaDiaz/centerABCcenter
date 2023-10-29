export interface Blogs {
   data: BlogsData
   meta: BlogsMeta
}

export interface BlogsData {
   id: number
   title: string
   subtitle: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   subtitleDetails: string
   // seo:Seo
}

export interface BlogsMeta {
   data: BlogsData
   meta: BlogsMeta
}
