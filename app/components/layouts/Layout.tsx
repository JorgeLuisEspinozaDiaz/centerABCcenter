import { Outfit, Quicksand, Roboto } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import { InfoHeader } from '../molecules/InfoHeader'
import { CustomHead } from '../globals/CustomHead'

const outfit = Outfit({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-outfit',
})

const quicksand = Quicksand({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
   variable: '--font-quicksand',
})

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700'],
   variable: '--font-quicksand',
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className={`${outfit.variable}  ${quicksand.className}   ${roboto.className}relative`}>
         <InfoHeader />
         <CustomHead />
         <Header />
         {children}
         <Footer />
      </div>
   )
}
