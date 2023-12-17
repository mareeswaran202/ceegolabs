'use client'

import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'


export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="about-section-two">
                <div className="auto-container">
                    <div className="row"> 
                        <div className="col-lg-6 ">
                            <div className="image-block">
                                <div className="image-one"><img className="lazy-image owl-lazy" src="/assets/images/resource/home-one.jpg" alt="" /></div>
                                <div className="image-two"><img className="lazy-image owl-lazy" src="/assets/images/resource/lab-person.jpg" alt="" /></div>
                                <div className="image-three">
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/lab-dark.jpg" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title style-two">
                                <h4><span className="flaticon-endless" />About Ceegolabs</h4>
                                {/* <h2>Our passion for excellence ensures the <br />highest quality of product</h2> */}
                                <h2>Creating A Business With <br/> Authentic Integrity</h2>

                            </div> .
                            <div className="content-block">
                                <div className="text">Ceego Labs Provides state-of-art manufacturing facilities for Food Supplements, Pharmaceutical & Feed Supplement Formulations. We have good Manufacturing Practices and Superior quality products as a cardinal principle.Quality is paramount at Ceego Labs. Our quality processes and procedures span every area of manufacturing from the raw materials to finished products.Our combination of highly experienced and well Qualified professionals and latest technology allows us to be a pioneer in Pharmaceutical and Nutraceuticals manufacturing.</div>
                                
                               
                            </div>
                            {/*Testimonial Carousel*/}
                            
                            <Link href="/about-3" className="read-more-link"><i className="flaticon-right-arrow" />More About Company</Link>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

        </>
    )
}
