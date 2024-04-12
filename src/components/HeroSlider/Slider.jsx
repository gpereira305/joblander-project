import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
   return (
      <>
         {" "}
         <Swiper
            speed={950}
            parallax={true}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation, Parallax]}
            pagination={{
               clickable: true,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div>
                  <div className="title" data-swiper-parallax="-800">
                     Slide 1
                  </div>
                  <div className="text" data-swiper-parallax="-500">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                     </p>
                     <button className="button__layout" type="button">
                        Contate nos
                     </button>
                  </div>
               </div>
               <figure>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
               </figure>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div className="title" data-swiper-parallax="-800">
                     Slide 1
                  </div>
                  <div className="text" data-swiper-parallax="-500">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                     </p>
                     <button className="button__layout" type="button">
                        Contate nos
                     </button>
                  </div>
               </div>
               <figure>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
               </figure>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div className="title" data-swiper-parallax="-800">
                     Slide 1
                  </div>
                  <div className="text" data-swiper-parallax="-500">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                     </p>
                     <button className="button__layout" type="button">
                        Contate nos
                     </button>
                  </div>
               </div>
               <figure>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
               </figure>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
