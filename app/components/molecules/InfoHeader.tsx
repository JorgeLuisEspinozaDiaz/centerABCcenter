import { useGeneralStore } from '@/store/generalStore'
import { FC } from 'react'
import { Socials } from '../atoms/Social'
import { Container } from '../globals'

export const InfoHeader: FC = () => {
   const { generals } = useGeneralStore()

   return (
      <>
         <div className="InfoHeader-container">
            <div className="InfoHeader-con">
               <ul className="InfoHeader-ul">
                  <li className={`InfoHeader-li`}>
                     <a href={generals.url_map} target="_blank" className="InfoHeader-a">
                        <i className="icon-location"></i>
                        {generals.address}
                        <hr className="w-[2rem] text-black rotate-90" />
                     </a>
                  </li>
                  <li className={`InfoHeader-li`}>
                     <a href={`tel:${generals.phone}`} className="InfoHeader-a">
                        <i className="icon-tel"></i>
                        {generals.phone}
                        <hr className="w-[2rem] text-black rotate-90" />
                     </a>
                  </li>

                  <li className={`InfoHeader-li`}>
                     <a href={`mailto:${generals.email}`} className="InfoHeader-a">
                        <i className="icon-message"></i>
                        {generals.email}
                        <hr className="w-[2rem] text-black rotate-90" />
                     </a>
                  </li>
                  <li className={`InfoHeader-li`}>
                     <a className="InfoHeader-a">
                        <i className="icon-calendar"></i>
                        {generals.date}
                     </a>
                  </li>
               </ul>

               <div className="InfoHeader-social">
                  <Socials rsp={false} className="InfoHeader-socials" />
               </div>
            </div>
         </div>
      </>
   )
}
