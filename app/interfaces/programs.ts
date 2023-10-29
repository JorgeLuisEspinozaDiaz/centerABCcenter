import { Picture } from './shared'

export interface Programs {
   data: ProgramsData[]
   meta: ProgramsMEta
}

export interface ProgramsData {
   id: number
   title: string
   content: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   titleprograms: string
   image: Picture
   icon: Picture
   list_questions: List_questions[]
}

export interface List_questions {
   id: number
   title: string
   text: string
}
export interface ProgramsMEta {}
