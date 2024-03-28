'use client'

import Link from "next/link"
import { useState } from 'react'
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
                                <div className="image-one"><img className="lazy-image owl-lazy" style={{width:'300px',height:'490px',objectFit:'cover'}} src="/assets/images/resource/pill-box.jpg" alt="" /></div>
                                <div className="image-two"><img className="lazy-image owl-lazy" style={{width:'290px',height:'423px',objectFit:'cover'}} src="/assets/images/resource/tablet-manufacturing.jpg" alt="" /></div>
                                <div className="image-three">
                                    <img className="lazy-image owl-lazy" style={{width:'300px',height:'290px',objectFit:'cover'}} src="/assets/images/resource/tablet-machine-overlay.png" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title style-two">
                                <h4><span className="flaticon-endless"></span>About <span className="ceegotxt">Ceego Labs</span></h4>
                               
                                <h2>Creating A Business With <br/> Authentic Integrity</h2>

                            </div>
                            <div className="content-block">
                                <div className="text"><span className="ceegotxtpara">Ceego Labs</span> provides state-of-the-art manufacturing facilities for Food Supplements, Pharmaceutical and Feed Supplement Formulations. We have good manufacturing practices and superior-quality products as a cardinal principle. Quality is paramount at <span className="ceegotxtpara">Ceego Labs</span>. Our quality check processes and procedures span every area of manufacturing, from raw materials to finished products. Our combination of highly experienced, well-qualified professionals and the latest technology allows us to be a pioneer in Pharmaceutical and Nutraceuticals manufacturing. We are dedicated to delivering the highest possible levels of customer satisfaction.</div>
                                
                               
                            </div>
                             
                            
                            <Link href="/aboutus" className="read-more-link"><i className="flaticon-right-arrow" />More About Company</Link>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

        </>
    )
}
