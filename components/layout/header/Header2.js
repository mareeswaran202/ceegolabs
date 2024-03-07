import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-two">
                    <div className="auto-container">
                        <div className="inner justify-content-end">
                            
                            <div className="top-right">
                                <ul className="contact-info-two">
                                    
                                    <li className="border-0"><a href="mailto:info@ceegolabs.com"><i className="flaticon-mail" />Email Us</a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-two">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="navbar-right-info d-none">
                                    <div className="faq-btn"><a href="#"><span className="flaticon-question" />FAQ'S</a></div>
                                    <div className="link-btn"><a href="#" className="theme-btn btn-style-four"><span className="btn-title">Free Consult</span></a></div>
                                    <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                    <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-two">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></div>
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                       
                                        
                                        <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
               {isMobileMenu &&  <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

            </header>

        </>
    )
}
