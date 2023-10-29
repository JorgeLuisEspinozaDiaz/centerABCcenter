import React from 'react'
import Link from 'next/link'
import { Rubik } from 'next/font/google'

interface BreadCumbsProp {
   breadCumbMenu: { label: string; url: string }[]
   contact?: boolean
}

const BreadCumb = ({ breadCumbMenu, contact }: BreadCumbsProp) => {
   return (
      <div className={`BreadCumbs${contact && 'contact'}`}>
         <ul className={`BreadCumbs-list`}>
            <li className={'BreadCumbs-li'}>
               <Link href={'/'} className={` font-quicksand font-normal`}>
                  Home
               </Link>
            </li>
            {breadCumbMenu?.map(({ label, url }) => (
               <li className={'BreadCumbs-li'} key={url}>
                  <Link href={url} className="font-quicksand">
                     {label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default BreadCumb
