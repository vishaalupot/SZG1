import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.css"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from './Assets/abu.jpg';
import slide_image_2 from './Assets/abu.jpg';
import slide_image_3 from './Assets/abu.jpg';
import slide_image_4 from './Assets/abu.jpg';
import slide_image_5 from './Assets/abu.jpg';
import slide_image_6 from './Assets/abu.jpg';
import slide_image_7 from './Assets/abu.jpg';

function Benefits() {
  return (
    <div className="BenefitsContainer">
      <h1 className="heading">What We Offer</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={20} // Adjust this value as per your preference
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        style={{height:'max-content !important'}}
      >
       <SwiperSlide>
        <h4 style={{color: 'black'}}>Office <br />  Location</h4>
        <div className='card1' style={{ position: 'relative' }}>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <h4 style={{color: 'black'}}>World-wide <br /> Clients  </h4>
        <div className='card2' style={{ position: 'relative' }}>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <h4 style={{color: 'black'}}>Access to the <br />  Domestic Market</h4>
        <div className='card3' style={{ position: 'relative' }}>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <h4 style={{color: 'black'}}>Exemption of <br /> Income Tax</h4>
        <div className='card4' style={{ position: 'relative' }}>
        </div>
        </SwiperSlide>

        


        <SwiperSlide>
        <h4 style={{color: 'black'}}>Employment and <br /> Labor Force</h4>
        <div className='card5' style={{ position: 'relative' }}>
        </div>
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          
        </div>
      </Swiper>
    </div>
  );
}

export default Benefits;