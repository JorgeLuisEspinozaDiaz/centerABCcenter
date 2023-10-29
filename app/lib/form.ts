export interface TYPE_FIELD_PROPS {
   name: RegExp
   email: RegExp
   phone: RegExp
   programs: RegExp
   captcha: RegExp
}

// Expresiones regulares para validaciones de formulario

export const TYPE_FIELD: TYPE_FIELD_PROPS = {
   name: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
   email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
   phone: /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i,
   programs: /[\w]+/i,
   captcha: /[\w]+/i,
}

export interface InitialFormState {
   name: string
   email: string
   phone: string
   programs: string
   message: string
   captcha: string
}

export interface InitialFormErrors {
   name: string
   email: string
   phone: string
   programs: string
   message: string
   captcha: string
}

// Estado inicial del formulario

export const initialFormState: InitialFormState = {
   name: '',
   email: '',
   phone: '',
   programs: '',
   message: '',
   captcha: '',
}

// Campos del formulario que no pueden estar vacios

export const initialFormErrors: InitialFormErrors = {
   name: '',
   email: '',
   phone: '',
   programs: '',
   message: '',
   captcha: '',
}
