import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Container } from '../globals'
import { goToSection } from '@/lib'

interface HomeChooseOneProps {
   title: string
   subtitle: string
   text_one: string
   text_two: string
   list_choose: string
   image: Picture
}

const HomeChooseOne = ({ title, subtitle, text_one, text_two, list_choose, image }: HomeChooseOneProps) => {
   return (
      <Container>
         <div>
            <div className="HomeChooseOne-imagedes cursor-pointer " onClick={() => goToSection('/HomeChooseOne')}>
               <Image src={'/white.png'} alt="vector" height={1000} width={1000} className="w-full h-full" />
               <i className="icon-bottomone HomeChooseOne-icon"></i>
            </div>

            <section className="HomeChooseOne relative" data-section={'/HomeChooseOne'}>
               <div className="HomeChooseOne-images">
                  <Image src={'/white.png'} alt="vector" height={1000} width={1000} className="w-full h-full" />
                  <i className="icon-bottomone HomeChooseOne-icon"></i>
               </div>
               <div className="HomeChooseOne-containerText">
                  <h2 className="HomeChooseOne-title">{title}</h2>
                  <h3 className="HomeChooseOne-subtitle">{subtitle}</h3>
                  <div className="HomeChooseOne-image">
                     <Image src={'/vector.png'} alt="vector" height={1000} width={1000} className="w-full h-full" />
                  </div>
                  <div className="HomeChooseOne-containerSubtitle">
                     <p className="HomeChooseOne-textOne">{text_one}</p>
                     <p className="HomeChooseOne-textTwo">{text_two}</p>
                  </div>
                  <div className="HomeChooseOne-list">
                     <ReactMarkdown>{list_choose}</ReactMarkdown>
                  </div>
               </div>
               <div className="HomeChooseOne-imageBoy">
                  <Image src={image.url} alt="vector" height={1000} width={1000} className="w-full h-full" />
               </div>
            </section>
         </div>
      </Container>
   )
}

export default HomeChooseOne
