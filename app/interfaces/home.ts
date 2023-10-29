import { MetaSEO, Picture } from './shared'

export interface Home {
   data: HomeData
   meta: HomeMeta
}

export interface HomeData {
   id: 1
   createdAt: string
   updatedAt: string
   publishedAt: string
   home_prin: Home_prin
   home_choose: Home_choose
   home_programs: Home_programs
   home_choose_two: Home_choose_two
   home_blog: Home_blog
   home_map: Home_map
   home_schedule: HomeSchedule
   home_list_schedule: HomeListSchedule[]
   seo: MetaSEO
}

export interface Home_prin {
   id: number
   title: string
   text: string
   subtitle: string
   title_mobile: string
   media: Picture
}

export interface Home_choose {
   id: number
   title: string
   subtitle: string
   text_one: string
   text_two: string
   list_choose: string
   image: Picture
}

export interface Home_programs {
   id: number
   title: string
   subtitle: string
}

export interface Home_choose_two {
   id: number
   title: string
   subtitle: string
   text: string
   image: Picture
}

export interface Home_blog {
   id: number
   title: string
   subtitle: string
}
export interface Home_map {
   id: number
   title: string
   subtitle: string
   text: string
   url_map: string
   icon: Picture
}

export interface HomeSchedule {
   id: number
   title: string
   content: string
}

export interface HomeListSchedule {
   id: number
   title: string
   schedule: string
   slug: string
   img: Picture
   list_schedule: HomeListScheduleItem[]
}

export interface HomeListScheduleItem {
   id: number
   hour: string, 
   title_list: string,
   content: string
}



export interface Seo {}

export interface HomeMeta {}
