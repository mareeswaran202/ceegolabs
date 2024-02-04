
'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function AboutBanner(props) {
    return (
        <>
            <section className="banner-section style-two">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                       <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/4.jpg" /> 
                        <div className="pattern2"/>
                        <div className="auto-container" style={{maxWidth:'1050px'}}>
                            <div className="content-box">
                                <div>
                                  
                                    <h2>{props.headertxtone}</h2>
                                    <h3>{props.subheadertxtone}</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/5.jpg" />
                        <div className="pattern2" />
                        <div className="auto-container" style={{maxWidth:'1050px'}}>
                            <div className="content-box">
                                <div>
                                   
                                    <h2>Our Values</h2>
                                    <h3>A healthy commitment to produce world class products and services</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                   

                    <div className="owl-nav rightnav">
                        <button type="button" className="owl-prev">
                        <i className="flaticon-right-arrow" />
                        </button>                       
                    </div>
                    <div className="owl-nav leftnav">
                    <button type="button" className="owl-next">
                        <i className="flaticon-right-arrow" />
                        </button>
                    </div>
                </Swiper>


            </section>
        </>
    )
}
