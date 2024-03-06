import React from "react";
import { cakeData } from "../helper/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Card() {
  return (
    // <div className="bg-pink flex w-30">
    <Swiper
        style={{width:'400px'}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
      {cakeData.map((cake) => (
        <SwiperSlide className="flex w-30">
        <div key={cake.img} className="border-b-0 border-l-0 border-r-0 border-t-2 p-5 h-50 rounded-bl-0 rounded-br-3xl bg-pink-200 m-5 w-45">
          <img
            src={
              cake.img
            }
            alt="cake"
            className="rounded-tr-0 rounded-bl-0 rounded-br-2xl rounded-tl-0 mb-6"
          />
          <h4>
            <a href="#">Chocolate </a>
          </h4>
          <p>Land behold it created good saw after she'd our set.</p>
        </div>
        </SwiperSlide>
      ))}
    
      </Swiper>
    // </div>
  );
}

export default Card;
