'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    {/* <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></div> */}
                    <div className="menu-outer mt-5">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li ><Link href="/">Home</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Company</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/about-3">About Us</Link>
                       
                       </li>
                       <li><Link href="/team-3">Meet Our Team</Link>
                           
                       </li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li><Link href="/contract-manufacturing">Contract Manufacturing</Link></li>
                        <li><Link href="/quality-complaince">Quality Compliance</Link></li>
                        <li><Link href="/private-labeling">Private Labeling</Link></li>
                        <li><Link href="/custom-packaging">Custom Packaging</Link></li>
                        <li><Link href="/distribution-support">Distribution Support</Link></li>
                        <li><Link href="/new-formulation-development">New Formulation Development</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div></li>
                                    <li><Link href="/infrastructure">Infrastructure</Link></li>
                <li><Link href="/export-products">Export Products</Link></li>
                <li><Link href="/contact-2">Contact Us</Link></li>
                               
                                {/* <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 14 ? "dropdown current" : "dropdown"}><Link href="/#">Blog Default</Link>
                                            <ul style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                                <li><Link href="/blog-1">Full Width</Link></li>
                                                <li><Link href="/blog-2">Left Sidebar</Link></li>
                                                <li><Link href="/blog-3">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 14 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(14)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 14 ? "dropdown current" : "dropdown"}><Link href="/#">Blog Grdi View</Link>
                                            <ul style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                                <li><Link href="/blog-4">Left Sidebar</Link></li>
                                                <li><Link href="/blog-5">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 14 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(14)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 15 ? "dropdown current" : "dropdown"}><Link href="/#">Blog List View</Link>
                                            <ul style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                                <li><Link href="/blog-6">Full Width</Link></li>
                                                <li><Link href="/blog-7">Left Sidebar</Link></li>
                                                <li><Link href="/blog-8">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 15 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(15)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 16 ? "dropdown current" : "dropdown"}><Link href="/#">Single Post</Link>
                                            <ul style={{ display: `${isActive.key == 16 ? "block" : "none"}` }}>
                                                <li><Link href="/blog-details">With Sidebar</Link></li>
                                                <li><Link href="/blog-details-2">Without Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 16 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(16)}><span className="fa fa-angle-right" /></div></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div></li> */}
                                 
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
