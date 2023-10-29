import { List_questions, ProgramsData } from '@/interfaces/programs'
import Image from 'next/image'
import React from 'react'
import CardPrograms from '../molecules/CardPrograms'
import { Container } from '../globals'
import { Element } from 'react-scroll'

interface HomeProgramsProps {
   title: string
   subtitle: string
   programs: ProgramsData[]
}
const HomePrograms = ({ title, subtitle, programs }: HomeProgramsProps) => {
   return (
      <div className="relative">
         <div className="HomePrograms-vectors">
            <Image src={'/vecprograms.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover " />
         </div>

         <div className="HomePrograms-blueprograms">
            <Image src={'/blueprograms.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
         </div>

         <div className="HomePrograms-imagprog">
            <Image src={'/imagprog.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover " />
         </div>

         <div className="HomePrograms-starprograms">
            <Image
               src={'/starprograms.png'}
               alt=""
               width={1000}
               height={1000}
               className="w-full h-full object-cover "
            />
         </div>
         {/* <Element name="/programs" className="section"> */}
         <section className="HomePrograms" id="/programs">
            <div className="HomePrograms-vectorsmobile">
               <Image src={'/programs.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>

            <div className="home-containers">
               <Container>
                  <div className="HomePrograms-conta-title">
                     <h2 className="HomePrograms-title">{title}</h2>
                     <h3 className="HomePrograms-subtitle">{subtitle}</h3>
                     <div className="HomePrograms-vector">
                        <Image
                           src={'/vector.png'}
                           alt=""
                           width={1000}
                           height={1000}
                           className="w-full h-full object-cover"
                        />
                     </div>
                  </div>
               </Container>
               <div className="">
                  <Container>
                     <div className="HomePrograms-container-card">
                        {programs.map(({ title, icon, content, list_questions, image, id, titleprograms }) => (
                           <CardPrograms
                              key={id}
                              id={id}
                              title={title}
                              icon={icon}
                              content={content}
                              list_questions={list_questions}
                              image={image}
                              titleprograms={titleprograms}
                           />
                        ))}
                     </div>
                  </Container>
               </div>
            </div>
         </section>
         {/* </Element> */}
      </div>
   )
}

export default HomePrograms
