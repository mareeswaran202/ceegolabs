
'use client'
import Link from "next/link"
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


export default function Banner() {
    return (
        <>
            <section className="banner-section style-two">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/nutraceuticals-new.jpg" />
                        <div className="pattern2" />
                        <div className="auto-container" style={{maxWidth:'1050px'}}>
                            <div className="content-box">
                                <div>
                                    <h3 className="d-none">Strategy &amp; Planning</h3>
                                    <h2>Nutraceuticals </h2>
                                    {/* <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div> */}
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
                                    <h3 className="d-none">Support and Maintenance</h3>
                                    <h2>New Product<br/> Development</h2>
                                    {/* <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/food-supplements.jpg" />
                        <div className="pattern2" />
                        <div className="auto-container" style={{maxWidth:'1050px'}}>
                            <div className="content-box">
                                <div>
                                    <h3 className="d-none">Food Supplements</h3>
                                    <h2 className="d-none">Unique <br /> solution from <br /> expert team.</h2>
                                    <h2>Food Supplements</h2>
                                    {/* <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

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
