import React from 'react'
import { Container } from '../globals'
import { useGeneralStore } from '@/store'
import { Socials } from '../atoms/Social'

const Footer = () => {
   const { generals } = useGeneralStore()

   return (
      <footer className="footer">
         <Container>
            <div className="footer-container">
               <div className="footer-content">
                  <i className="icon-location"></i>
                  <a href={generals.url_map} target="_blank" className="footer-span">
                     {generals.address}
                  </a>
               </div>
               <div className="footer-content">
                  <i className="icon-tel"></i>
                  <a href={`tel:${generals.phone}`} className="footer-span">
                     {generals.phone}
                  </a>
               </div>
               <div className="footer-content">
                  <i className="icon-message icon-mess"></i>
                  <a href={`mailto:${generals.email}`} className="footer-span">
                     {generals.email}
                  </a>
               </div>
               <div className="footer-content">
                  <i className="icon-calendar"></i>
                  <a className="footer-span">{generals.date}</a>
               </div>
               <div className="footer-content footer-social">
                  <Socials />
               </div>
            </div>
         </Container>
      </footer>
   )
}

export default Footer
