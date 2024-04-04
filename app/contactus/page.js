'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Home() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Get in touch" wrapperCls="home_2">
                <div>
                    <section className="contact-details-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>We’d love to help you</h2>
                                <div className="text">Please feel free to get in touch using the form below. We'd love to hear your <br /> thoughts &amp; answer any questions you may have!</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                        <h4>Corporate Address</h4>
                                        <ul>
                                            <li style={{fontSize:14, fontWeight:700}}>Old 96 / 6 , New 23 / 6 ,</li>
                                            <li style={{fontSize:14, fontWeight:700}}>Dr.Ambethkar Road ,1st Floor,</li>
                                            <li style={{fontSize:14, fontWeight:700}}>Chennai, Tamil Nadu 600024</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                        <h4>Factory Address</h4>
                                        <ul>
                                        <li style={{fontSize:13, fontWeight:700}}>S.No.84/1A1, 86/3A1, 86/3A2, 86/3B1,</li>
                                            <li style={{fontSize:14, fontWeight:700}}>Manjamedu, Thenneri Post,</li>
                                            <li style={{fontSize:14, fontWeight:700}}>Kanchipuram District - 631 604.</li>
                                        </ul>
                                    </div>
                                </div>
                               
                            </div>
                            
                        </div>
                    </section>
                    {/* Contact Section Style Five */}
                    <section className="contact-section style-five">
                        <div className="auto-container">
                            <div className="row m-0">
                                <div className="col-lg-6 left-column" style={{ backgroundImage: 'url(assets/images/background/bg-22.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="wrapper-box">
                                            <div className="sec-title light">
                                                <h2>New case? <br /> Send message us</h2>
                                                <div className="text-decoration">
                                                    <span className="left" />
                                                    <span className="right" />
                                                </div>
                                                <div className="text">Just send us your questions or concerns to <br /> starting a new project.</div>
                                            </div>
                                             
                                                
                                            <h4 className="contacthead">Working Hours</h4>                                               
                                            
                                            <ul className="list">
                                                <li>Monday - Saturday:</li>
                                                <li>9.15 - 6.15</li>
                                                <li>Sunday &amp; Public Holidays (Closed)</li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 right-column" style={{ backgroundImage: 'url(assets/images/background/bg-23.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="contact-form-box">
                                            <form method="post" action="sendemail.php" className="contact-form">
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="firstname" placeholder="First Name" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="email" name="email" placeholder="Email Address" required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" name="phone" placeholder="Phone" required />
                                                    </div>
                                                   
                                                    <div className="col-md-12 form-group">
                                                        <textarea name="message" placeholder="Message goes here" />
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
                                                    </div>
                                                </div>
                                            </form>
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