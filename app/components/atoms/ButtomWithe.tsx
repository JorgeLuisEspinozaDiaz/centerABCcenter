import { useGeneralStore } from '@/store'
import Link from 'next/link'
import React from 'react'

const ButtomWithe = () => {
   const { multilanguage } = useGeneralStore()

   return (
      <Link href={'/contact'}>
         <button className="ButtomWithe">
            <span className="ButtomWithe-span">{multilanguage.lbl_contact_us}</span>
         </button>
      </Link>
   )
}

export default ButtomWithe
