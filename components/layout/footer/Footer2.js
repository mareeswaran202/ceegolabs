import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer className="main-footer style-two">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-8.png)' }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="footer-widget links-widget">
                                    <h3 className="widget-title">Information</h3>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li><Link href="">About</Link></li>
                                                    <li><Link href="">Meet Our Team</Link></li>
                                                    <li><Link href="">News</Link></li>
                                                   
                                                   
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                   
                                                <li><Link href="">Services</Link></li>
                                                    <li><Link href="">Careers</Link></li>
                                                    <li><Link href="/contact-2">Contact</Link></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logo"><img src="/assets/images/icons/icon-11.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-none">
                                <div className="footer-widget post-widget">
                                    <h3 className="widget-title">Trending Post</h3>
                                    <div className="widget-content">
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-9.jpg" alt="" /></Link></div>
                                            <div className="date">14 February, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">Is Your Business Ready For <br />Integration?</Link></h4>
                                        </div>
                                        <div className="post">
                                            <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-10.jpg" alt="" /></Link></div>
                                            <div className="date">21 January, {new Date().getFullYear()}</div>
                                            <h4><Link href="/blog-details">That Should You Include In <br /> Your Marketing Plan </Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact Details</h3>
                                    <div className="widget-content">
                                         
                                        <div className="text">
                                            <p className="text">Old 96 / 6 , New 23 / 6,</p>
                                            <p className="text">Dr.Ambethkar Road ,1st Floor, Kodambakkam,</p>
                                            <p className="text">Chennai, Tamil Nadu 600024</p>
                                            </div>
                                        <ul className="list">
                                            <li>Call Us :  <Link href="tel:044-27259100">044-27259100</Link></li>
                                            <li>Mail us :  <Link href="mailto:supportteam@Envolve.com">Supportteam@Envolve.com</Link></li>
                                        </ul>
                                        <ul className="social-links clearfix">
                                            <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                            <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom-two">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright-text">© {new Date().getFullYear()} Ceegolabs, All Rights Reserved.</div>
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
