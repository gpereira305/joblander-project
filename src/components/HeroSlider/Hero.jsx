import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderData } from "../../data";
import "./index.css";

export default function Hero() {
   return (
      <div className="hero">
         <Swiper
            speed={1200}
            parallax={true}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Parallax]}
            pagination={{ clickable: true }}
            // autoplay={{
            //    delay: 4000,
            //    disableOnInteraction: false,
            // }}
         >
            {sliderData?.map(({ title, message, banner, id }) => (
               <SwiperSlide key={id}>
                  <div className="hero__content" data-swiper-parallax="-800">
                     <h1 className="hero__title">{title}</h1>

                     <p className="hero__message">{message}</p>
                     <button className="button__layout" type="button">
                        Contate nos
                     </button>
                  </div>
                  <figure className="hero__image">
                     <img
                        className="hero__img"
                        src={banner}
                        alt="Banner"
                        title="Banner"
                     />
                  </figure>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
