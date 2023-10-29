export interface Multilanguage {
   data: MultilanguageData
   meta: MultilanguageMeta
}

export interface MultilanguageData {
   id: number
   lbl_contact_us: string
   lbl_read_more: string
   lbl_send: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   menu: Menu[]
}

export interface Menu {
   id: number
   label: string
   url: string
}

export interface MultilanguageMeta {}
