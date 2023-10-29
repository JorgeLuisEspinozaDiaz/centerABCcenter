import { InputForm, MetaSEO } from './shared'

export interface Contact {
   data: ContactData
   meta: ContactMeta
}

export interface ContactData {
   id: number
   title: string
   subtitle: string
   text: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   url_contact_map: string
   form: Form
   seo: MetaSEO
}

export interface Form {
   id: number
   messages: Messages
   name: InputForm
   email: InputForm
   phone: InputForm
   programs: InputForm
   message: InputForm
}

export interface Messages {
   invalid_tel: string
   invalid_name: string
   mail_sent_ok: string
   invalid_email: string
   invalid_number: string
   invalid_required: string
   validation_error: string
   invalid_recaptcha: string
}

export interface ContactMeta {}
