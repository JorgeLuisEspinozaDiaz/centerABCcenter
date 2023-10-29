import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React from 'react'
import ButtomWithe from '../atoms/ButtomWithe'
import { Container } from '../globals'
import { Element } from 'react-scroll'

interface HomeBannerProps {
   title: string
   text: string
   subtitle: string
   title_mobile: string
   media: Picture
}
const HomeBanner = ({ title, text, subtitle, media, title_mobile }: HomeBannerProps) => {
   const view = !!media?.url ? media.url : ''

   const ogTitle = title.split('/')
   const titleOne = ogTitle[0]
   const titleTwo = ogTitle[1]

   const titlemobile = title_mobile.split('/')
   const titlemobileOne = titlemobile[0]
   const titlemobileTwo = titlemobile[1]

   return (
      // <Element name="/" className="section">
      <section className="HomeBanner" id="/">
         <video className="homeBanner-video w-full h-full" src={view} autoPlay muted loop></video>
         <Container>
            <div className="homeBanner-conte">
               <h2 className="HomeBanner-title">{subtitle}</h2>
               <h1 className="HomeBanner-subtitleOne">
                  {titleOne} <span className="HomeBanner-subtitleTwo">{titleTwo}</span>
               </h1>
               <h1 className="HomeBanner-subtitleOneMobi">
                  {titlemobileOne} <span className="HomeBanner-subtitleTwo">{titlemobileTwo}</span>
               </h1>

               <div className="HomeBanner-vector">
                  <Image src={'/vector.png'} alt={'vector'} width={1000} height={1000} className="w-full h-full" />
               </div>
               <p className="HomeBanner-text">{text}</p>
               <div className="HomeBanner-Buttom">
                  <ButtomWithe />
               </div>
            </div>
         </Container>
         {/* <div className=" homeBanner-capa"></div> */}
      </section>
      // </Element>
   )
}

export default HomeBanner
