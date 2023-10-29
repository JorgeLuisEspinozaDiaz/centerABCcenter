import { useForm } from '@/hooks'
import { Form } from '@/interfaces/contact'
import { ProgramsData } from '@/interfaces/programs'
import React, { useEffect, useRef } from 'react'
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha'
import ButtomSend from '../atoms/ButtomSend'
import { Loader } from '../atoms/Loader'
import { useNavbarContext } from '@/context/navbar.context'

interface FormProps {
   form: Form
   programss: ProgramsData[]
}

const Form = ({ form, programss }: FormProps) => {
   const { message, messages, name, phone, programs, email } = form

   const { serviceSelected } = useNavbarContext()

   const captchaRef = useRef<ReCAPTCHAType>(null)
   const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string
   const {
      failure,
      sending,
      errors,
      formState,
      responseMessage,
      validateInput,
      validateSelect,
      handleInput,
      handleSubmit,
      setFormState,
      phoneRef,
      phoneNumberFormatter,
   } = useForm(messages, '/ezforms/submit', captchaRef)

   const onChangeRecaptcha = () => {
      if (captchaRef.current?.getValue()) {
         setFormState({
            ...formState,
            captcha: captchaRef.current?.getValue() as string,
         })
      }
   }

   useEffect(() => {
      setFormState((prevState) => {
         return { ...prevState, programs: serviceSelected }
      })
   }, [setFormState, serviceSelected])

   return (
      <form className="Form" onSubmit={handleSubmit}>
         <div className="Form-containput">
            <div className="container">
               <input
                  className="formInput"
                  type="text"
                  placeholder={name.placeholder}
                  value={formState.name}
                  onInput={validateInput}
                  name={name.name}
                  id={name.name}
               />
               {errors.name && <span className="Form-error">{errors.name}</span>}
            </div>

            <div className="container">
               <input
                  className="formInput"
                  type="text"
                  placeholder={email.placeholder}
                  value={formState.email}
                  onInput={validateInput}
                  name={email.name}
                  id={email.name}
               />
               {errors.email && <span className="Form-error">{errors.email}</span>}
            </div>
         </div>
         <div className="Form-containput">
            <div className="container">
               <input
                  className="formInput"
                  type="text"
                  placeholder={phone.placeholder}
                  value={formState.phone}
                  onInput={validateInput}
                  name={phone.name}
                  id={phone.name}
                  ref={phoneRef}
                  onKeyDown={phoneNumberFormatter}
               />

               {errors.phone && <span className="Form-error">{errors.phone}</span>}
            </div>
            <div className="container relative">
               <i className="icon-bottom icons-select"></i>
               <select
                  value={formState.programs}
                  name="programs"
                  onInput={validateSelect}
                  id={programs.name}
                  className="formInput inputselect "
               >
                  <option className="inputselect">{programs.placeholder}</option>
                  {programss.map((pro) => (
                     <option key={pro.id} className="text-slate-500">
                        {pro.titleprograms}
                     </option>
                  ))}
               </select>
               {errors.programs && <span className="Form-error">{errors.programs}</span>}
            </div>
         </div>
         <div className="containertextarea">
            <textarea
               className="formInputarea"
               placeholder={message.placeholder}
               value={formState.message}
               name={message.name}
               onInput={handleInput}
               id={message.name}
            />
         </div>
         <div>
            <ReCAPTCHA sitekey={captchaKey} ref={captchaRef} onChange={onChangeRecaptcha} />
         </div>

         <div className="Form-buttom">
            <ButtomSend />
            {sending && <Loader />}
         </div>
         <div className="messages">
            {responseMessage && (
               <span className={`feedback-message init ${failure && 'failure'}`}>{responseMessage}</span>
            )}
         </div>
      </form>
   )
}

export default Form
