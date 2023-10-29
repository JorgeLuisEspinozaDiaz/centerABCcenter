import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useNavbarContext } from '@/context/navbar.context'
import { goToSection } from '@/lib/utils'
import { useGeneralStore } from '@/store'
import { Logo } from '../atoms/Logo'
import ButtomBlue from '../atoms/ButtomBlue'
import { Link as ScrollLink, Element, scroller } from 'react-scroll'
import React, { useState, useRef, useEffect } from 'react'

interface NavbarProps {
   isMenuOpen: boolean
   closeMenu: () => void
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
   const { multilanguage } = useGeneralStore()
   const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext()
   const { asPath } = useRouter()

   const handleGoToSection = (url: string) => {
      scroller.scrollTo(url, {
         duration: 500,
         smooth: true,
         offset: -50,
      })
      goToSection(url)
      closeMenu()
   }

   const half = 4
   const menuPartOne = [...multilanguage.menu].slice(0, half)
   const menuPartTwo = [...multilanguage.menu].slice(half)

   return (
      <nav className={`Navbar ${isMenuOpen ? 'isActive' : ''}`}>
         <div className="Navbar-ctn">
            <Logo className="logoNavbar" />
            <ul className="Navbar-ul">
               {menuPartOne.map(({ id, label, url }) =>
                  asPath !== '/' ? (
                     <li key={id} className="Navbar-li-item">
                        <Link key={id} href={'/'} onClick={closeMenu}>
                           <span
                              className={`Navbar-li    ${url === asPath && 'isActive'} `}
                              onClick={() => setScrolltoSectionFromOtherPage(url)}
                           >
                              {label}
                           </span>
                        </Link>
                     </li>
                  ) : (
                     <li key={id} className="Navbar-li-item ">
                        <ScrollLink to={url} spy={true} smooth={true} duration={-0} offset={-150} className="">
                           <span className={`Navbar-li `} onClick={() => handleGoToSection(url)}>
                              {label}
                           </span>
                        </ScrollLink>
                     </li>
                  )
               )}
               {menuPartTwo.map(({ id, label, url }) => (
                  <Link key={id} href={url} onClick={closeMenu} className="button-border">
                     <span
                        className={`Navbar-li ${url === asPath && 'isActive'}  ${
                           url === '/contact' && 'contact hide-desktop'
                        } `}
                        onClick={() => setScrolltoSectionFromOtherPage(url)}
                     >
                        {label}
                     </span>
                  </Link>
               ))}
               <div className="nav-btn">
                  <ButtomBlue href="/contact" />
               </div>
            </ul>
         </div>
      </nav>
   )
}
