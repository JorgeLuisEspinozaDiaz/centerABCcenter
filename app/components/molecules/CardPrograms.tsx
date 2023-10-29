import { List_questions } from '@/interfaces/programs'
import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import ButtomBlue from '../atoms/ButtomBlue'
import { useNavbarContext } from '@/context/navbar.context'

interface CardProgramsProps {
   id: number
   title: string
   icon: Picture
   content: string
   list_questions: List_questions[]
   image: Picture
   titleprograms: string
}
const CardPrograms = ({ title, icon, content, list_questions, image, id, titleprograms }: CardProgramsProps) => {
   const ogTitle = content.split('/')
   const titleOne = ogTitle[0]
   const titleTwo = ogTitle[1]

   const { setServiceSelected } = useNavbarContext()
   const handleCategoryClick = (service: string) => {
      setServiceSelected(service)
   }
   const [expandedItemId, setExpandedItemId] = useState<number | null>(null)
   const contentRefs = useRef<(HTMLDivElement | null)[]>([])

   const toggleAccordion = (id: number) => {
      if (expandedItemId === id) {
         setExpandedItemId(null)
      } else {
         setExpandedItemId(id)
      }
   }

   useEffect(() => {
      const cleanup = () => {
         if (expandedItemId !== null) {
            const currentContentRefs = contentRefs.current
            const contentElement = currentContentRefs[expandedItemId as number]
            if (contentElement) {
               contentElement.style.maxHeight = '0'
            }
         }
      }

      if (expandedItemId !== null) {
         const currentContentRefs = contentRefs.current
         const contentElement = currentContentRefs[expandedItemId as number]
         if (contentElement) {
            const contentHeight = contentElement.scrollHeight
            contentElement.style.maxHeight = `${contentHeight}px`
         }
      }

      return cleanup
   }, [expandedItemId, contentRefs])

   const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
   }
   return (
      <div className={`CardPrograms card-${id}`}>
         <div className="CardPrograms-text">
            <div className="CardPrograms-conta-title">
               <div className="CardPrograms-icons">
                  <Image src={icon.url} alt="" height={1000} width={1000} className="w-full h-full object-contain" />
               </div>
               <h2 className="CardPrograms-title">{title}</h2>
            </div>
            <div className="CardPrograms-contact">
               <ReactMarkdown>{titleOne}</ReactMarkdown>
               <ReactMarkdown>{titleTwo}</ReactMarkdown>
            </div>

            <div className="CardPrograms-container-accordion">
               {list_questions.map((question) => (
                  <div className="CardPrograms-accordion" key={question.id}>
                     <div
                        className={`accordion-header ${expandedItemId === question.id ? 'active' : ''}`}
                        onClick={() => toggleAccordion(question.id)}
                     >
                        <i
                           className={`icon-bottom accordion-icon  ${expandedItemId === question.id ? 'active' : ''} `}
                        ></i>
                        <span className={`accordion-title ${expandedItemId === question.id ? 'text-white' : ''}`}>
                           {capitalizeFirstLetter(question.title.toLowerCase())}
                        </span>
                     </div>

                     <div
                        ref={(el) => (contentRefs.current[question.id] = el)}
                        className={`accordion-content ${expandedItemId === question.id ? 'active' : ''}`}
                     >
                        <span className="accordion-text">{question.text}</span>
                     </div>
                  </div>
               ))}
            </div>
            <div className="CardPrograms-buttom" onClick={() => handleCategoryClick(titleprograms)}>
               <ButtomBlue href="/contact" />
            </div>
         </div>

         <div className="CardPrograms-image">
            <Image src={image.url} alt="" height={1000} width={1000} className="w-full h-full object-contain" />
         </div>
      </div>
   )
}

export default CardPrograms
