import { useGeneralStore } from '@/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface ButtomProps {
   href?: string
}

const ButtomBlue = ({ href = '' }: ButtomProps) => {
   const { asPath } = useRouter()

   const { multilanguage } = useGeneralStore()

 
   return (
      <Link href={href}>
         <div className={`ButtomBlue ${asPath === '/contact' ? 'bg-blue text-white' : ''}`}>
            <span className="ButtomBlue-span">{multilanguage.lbl_contact_us}</span>
         </div>
      </Link>
   )
}

export default ButtomBlue
