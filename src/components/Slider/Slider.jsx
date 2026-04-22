import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import React from 'react'
import natural1 from '/src/img/natural1.png'
import natural2 from '/src/img/natural2.png'
import natural3 from '/src/img/natural3.png'
import natural4 from '/src/img/natural4.png'
import natural5 from '/src/img/natural5.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Slider.css'

export default function Slider() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={2}
                loopAdditionalSlides={3}
                coverflowEffect={{
                    rotate: 0,  
                    stretch: 150, 
                    depth: 200,  
                    modifier: 1, 
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
            >
                <SwiperSlide><img className='slider-img' src={natural1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slider-img' src={natural2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slider-img' src={natural3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slider-img' src={natural4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='slider-img' src={natural5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
} 