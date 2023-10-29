import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React from 'react'

interface HomeMapProps {
   title: string
   subtitle: string
   text: string
   url_map: string
   icon: Picture
}

const HomeMap = ({ title, subtitle, text, url_map, icon }: HomeMapProps) => {
   return (
      <section className="HomeMap">
         <div className="HomeMap-bloq">
            <h2 className="HomeMap-title">{title}</h2>
            <h3 className="HomeMap-subtitle">{subtitle}</h3>
            <div className="HomeMap-icon">
               <Image src={icon.url} width={1000} height={1000} alt="" />
            </div>
            <p className="HomeMap-text">{text}</p>
         </div>

         <div className="HomeMap-maps">
            <iframe className="map-iframe w-full h-full" src={url_map} loading="lazy"></iframe>
         </div>
      </section>
   )
}

export default HomeMap
