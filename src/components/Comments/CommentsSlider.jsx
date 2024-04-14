import React from "react";
import { userComments } from "../../data";
import CommentCard from "./CommentCard";
import commentsBg from "../../assets/images/background-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./index.css";
export default function CommentsSlider() {
   const breakPoints = {
      0: {
         slidesPerView: 1,
         spaceBetween: 50,
      },
      576: {
         slidesPerView: 1,
         spaceBetween: 50,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
   };
   return (
      <section
         className="comments"
         style={{ backgroundImage: `url(${commentsBg})` }}
      >
         <h2 className="comments__title main-title">
            O que dizem nossos clientes
         </h2>

         <Swiper
            speed={800}
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            breakpoints={breakPoints}
            modules={[Autoplay, Pagination]}
         >
            {userComments.map((comment, id) => (
               <SwiperSlide key={id}>
                  <CommentCard key={id} {...comment} />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}
