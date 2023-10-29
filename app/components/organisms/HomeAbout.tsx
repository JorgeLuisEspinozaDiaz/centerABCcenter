import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React from 'react'
import ButtomWithe from '../atoms/ButtomWithe'
import { Container } from '../globals'
import { Element } from 'react-scroll'

interface HomeAboutProps {
   title: string
   subtitle: string
   text: string
   image: Picture
}
const HomeAbout = ({ title, subtitle, text, image }: HomeAboutProps) => {
   return (
      <Element name="/why" className="section pt-[1.5rem]">
         <div className="HomeAbout-relative">
            <div className="HomeAbout-abouttop">
               <Image src={'/abouttop.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>

            <div className="HomeAbout-aboutbottom">
               <Image
                  src={'/aboutbottom.png'}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
               />
            </div>

            <section className="HomeAbout" data-section={'/why'}>
               <Container>
                  <div className="HomeAbout-container">
                     <div className="HomeAbout-containerText">
                        <h2 className="HomeAbout-title">{title}</h2>

                        <h1 className="HomeAbout-subtitle">{subtitle}</h1>
                        <div className="HomeAbout-vector">
                           <Image src={'/vector.png'} alt="" width={1000} height={1000} />
                        </div>
                        <p className="HomeAbout-text">{text}</p>
                        <div className="HomeAbout-buttom">
                           <ButtomWithe />
                        </div>
                     </div>
                     <div className="HomeAbout-image">
                        <Image
                           src={image.url}
                           alt=""
                           width={1000}
                           height={1000}
                           className="w-full h-full object-cover object-top"
                        />
                     </div>
                  </div>
               </Container>
            </section>
         </div>
      </Element>
   )
}

export default HomeAbout
