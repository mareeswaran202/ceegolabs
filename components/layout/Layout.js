
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Footer2 from './footer/Footer2'
import Header2 from './header/Header2'


export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls, breadcrumbbg }) {
    const [scroll, setScroll] = useState()
    // Mobile Menu
 
    const [isMobileMenu, setMobileMenu] = useState(false)  
   {!isMobileMenu ? document.body.classList.remove("mobile-menu-visible") : null}
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
        console.log(isMobileMenu)
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    
   
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
             <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup}/> 


                
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbbg={breadcrumbbg} />}

                {children}

                 <Footer2/>
            </div>
            <BackToTop scroll={scroll} />
            
        </>
    )
}
