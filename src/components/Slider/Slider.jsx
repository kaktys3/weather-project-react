import { Swiper, SwiperSlide } from 'swiper/react';
import natural1 from '/src/img/natural1.png'
import natural2 from '/src/img/natural2.png'
import natural3 from '/src/img/natural3.png'
import natural4 from '/src/img/natural4.png'
import natural5 from '/src/img/natural5.png'
import 'swiper/css';

export default function Slider() {
    return (
        <>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{natural1}</SwiperSlide>
      <SwiperSlide>{natural2}</SwiperSlide>
      <SwiperSlide>{natural3}</SwiperSlide>
      <SwiperSlide>{natural4}</SwiperSlide>
      <SwiperSlide>{natural5}</SwiperSlide>
    </Swiper>
        </>
    )
} 