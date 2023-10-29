import { Container } from '@/components/globals'
import { SeoEngine } from '@/components/globals/SeoEngine'
import BreadCumb from '@/components/molecules/BreadCumb'
import Form from '@/components/molecules/Form'
import { Contact, ContactData } from '@/interfaces/contact'
import { Programs, ProgramsData } from '@/interfaces/programs'
import { baseApi } from '@/lib'
import { GetStaticProps } from 'next'
import React from 'react'

interface contactProp {
   contact: ContactData
   programs: ProgramsData[]
}

const contact = ({ contact, programs }: contactProp) => {
   const breadCumbMenu = [
      {
         label: 'Contact us',
         url: '/conctac',
      },
   ]
   return (
      <div className="main-page">
         <div className="contact">
            <Container>
               <div className="contact-breadCumbMenu">
                  <BreadCumb breadCumbMenu={breadCumbMenu} />
               </div>

               <div className="contact-container">
                  <div className="contact-conten">
                     <h2 className="contact-title">{contact.title.toUpperCase()}</h2>
                     <h1 className="contact-subtitle">{contact.subtitle}</h1>
                     <p className="contact-text">{contact.text}</p>
                     <Form form={contact.form} programss={programs} />
                  </div>

                  <div className="contact-maps">
                     <iframe className="map-iframe w-full h-full" src={contact.url_contact_map} loading="lazy"></iframe>
                  </div>
               </div>

               <SeoEngine seo={contact.seo} />
            </Container>
         </div>
      </div>
   )
}

export default contact
export const getStaticProps: GetStaticProps = async () => {
   const [{ data: contact }, { data: programs }] = await Promise.all([
      baseApi.get<Contact>('/contact?populate=deep'),
      baseApi.get<Programs>('/programs?populate=deep'),
   ])

   return {
      props: {
         contact: contact.data,
         programs: programs.data,
      },
      revalidate: 1,
   }
}
