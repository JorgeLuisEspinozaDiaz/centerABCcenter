import { Favicon } from '@/components/globals/Favicon'
import { Layout } from '@/components/layouts'
import { NavbarProvider } from '@/context/navbar.context'
import { useGeneralStore } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
   const { getGenerals, multilanguage, generals } = useGeneralStore()

   useEffect(() => {
      getGenerals()
   }, [getGenerals])

   return (
      <>
         <Head>
            <title>Center ABCD</title>
            <Favicon />
         </Head>
         <NavbarProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </NavbarProvider>
      </>
   )
}
