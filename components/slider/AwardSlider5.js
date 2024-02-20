'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h2n',
        prevEl: '.h2p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
}

export default function AwardSlider5() {
    
  
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/images/resource/iso2018.png" alt="" /></div>
                    <h4> Food Safety <br /> Management System</h4>
                    
                </SwiperSlide>
                <SwiperSlide className="award-block-two">
                    <div className="image"><img src="/assets/images/resource/award-9.png" alt="" /></div>
                    <h4>Good Manufacturing <br /> Practice</h4>
                </SwiperSlide>
                <SwiperSlide className="award-block-two">
                    <div className="image image2"><img src="/assets/images/resource/award-10.png" alt="" /></div>
                    <h4>Registrar Corp <br /> USA</h4>
                </SwiperSlide>
              
            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h2p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h2n">
                    <span>›</span>
                </button>
            </div>
          <Modal />
        </>
    )
}
