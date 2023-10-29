export interface Generals {
   data: GeneralsData
   meta: GeneralsMeta
}

export interface GeneralsData {
   id: number
   address: string
   phone: string
   email: string
   date: string
   pixel_facebook: string
   facebook_id: string
   tag_manager: string
   url_map: string
   cell_phone: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   logo: Logo
   social_networks: SocialNetworks[]
   logo_mobile: Logo
}

export interface Logo {
   id: number
   name: string
   alternativeText: string
   caption: string
   width: number
   height: number
   formats: null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: null
   provider: string
   provider_metadata: null
   createdAt: string
   updatedAt: string
}

export interface SocialNetworks {
   id: number
   type: string
   url: string
}

export interface GeneralsMeta {}
