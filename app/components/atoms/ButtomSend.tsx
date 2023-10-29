import { useGeneralStore } from '@/store'
import React from 'react'

const ButtomSend = () => {
   const { multilanguage } = useGeneralStore()
   return (
      <button className="ButtomSend">
         <span className="ButtomSend-span">{multilanguage.lbl_send}</span>
      </button>
   )
}

export default ButtomSend
