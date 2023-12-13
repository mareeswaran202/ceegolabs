

import Layout from "@/components/layout/Layout"
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="About company" wrapperCls="home_2">
                <div>
                    <section className="about-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 content-column">
                                    <div className="sec-title">
                                        <h2>About Us</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">Ceego Labs Provides state-of-art manufacturing facilities for Food Supplements, Pharmaceutical & Feed Supplement Formulations. We have good Manufacturing Practices and Superior quality products as a cardinal principle.Quality is paramount at Ceego Labs. Our quality processes and procedures span every area of manufacturing from the raw materials to finished products.Our combination of highly experienced and well Qualified professionals and latest technology allows us to be a pioneer in Pharmaceutical and Nutraceuticals manufacturing. We are dedicated to delivering the highest possible levels of customer satisfaction. </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6">
                                    <div className="experience-years-block">
                                        <div className="image">
                                            <img src="/assets/images/resource/image-46.jpg" alt="" />
                                            <h2>14</h2>
                                        </div>
                                        <div className="text">Years <br /> experience</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="sec-title text-center">
                                        <h2>Reason for choosing our <br /> Ceegolabs</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                </div>            
                                
                            </div>
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Our Team Strength</h4>
                                            <div className="text">Ceego Labs has well Experienced, Qualified and Competent Technical Personnel in various departments.</div>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-diamond" /></div>
                                            <h4>Our Core Value</h4>
                                            <div className="text">At Ceego Labs, we share a strong set of values that serve as the foundation for our individual and associates performance.</div>
                                        </div>
                                    </div>                              
                                </div>
                                <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Customer Satisfaction</h4>
                                            <div className="text">CEEGO LABS's main goal has been to solicit and promote ideas from its teams in order to ensure customer satisfaction  by providing the best final product end-to-end.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-diamond" /></div>
                                            <h4>Latest Technologies</h4>
                                            <div className="text">Installed with the advanced machinery and technology our formulation meets international manufacturing standards.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Uncompromised Quality</h4>
                                            <div className="text">Our passion for excellence ensures the highest quality of product.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Competitive Price</h4>
                                            <div className="text">Ceego Labs is the company that is committed to good health for all by providing quality medicines at affordable prices.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                  
                    {/* Services Section five */}
                    
                    {/* Award Section */}
                    <section className="award-section style-two" style={{ backgroundImage: 'url(assets/images/background/bg-21.jpg)' }}>
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sec-title light">
                                        <h2>Our awards and achivements</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        
                                    </div>
                                    <div className="wrapper-box">
                                        <div className="row">
                                            <div className="col-lg-4 award-block d-flex justify-content-center">
                                                <div className="inner-box">
                                                    <div className="image award-image-con"><img src="/assets/images/resource/award-8.png" alt="" /></div>
                                                    <h4>Food Safety  <br /> Management System</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block d-flex justify-content-center">
                                                <div className="inner-box">
                                                    <div className="image award-image-con"><img className="gmp" src="/assets/images/resource/award-9.png" alt="" /></div>
                                                    <h4>Good Manufacturing <br /> Practice</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block d-flex justify-content-center">
                                                <div className="inner-box">
                                                    <div className="image award-image-con"><img src="/assets/images/resource/award-10.png" alt="" /></div>
                                                    <h4>Registrar Corp <br /> USA</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonail Section Two */}
                    <section className="testimonial-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Words from our customers</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            {/*Theme Carousel*/}
                            <TestimonialSlider2 />
                        </div>
                    </section>
                    {/* Client Logo */}
                    <section className="client-section-two style-three">
                        <div className="auto-container">
                            <div className="top-content row m-0 align-items-center justify-content-between">
                                <div className="sec-title">
                                    <h2>We Proud to Work</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-7.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-8.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-9.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-10.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-11.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-12.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-13.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-14.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}