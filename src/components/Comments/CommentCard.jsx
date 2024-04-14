import React from "react";

export default function CommentCard({ comment, name, profession, image }) {
   return (
      <div className="comment__card" data-swiper-parallax="-800">
         <div className="comment__content">
            <p className="comment__message">{comment}</p>
         </div>

         <div className="comment__wrapper">
            <figure className="comment__image">
               <img className="comment__img" src={image} alt="" />
            </figure>
            <div className="comment__info">
               <h3 className="comment__name">{name}</h3>
               <p className="comment__profession">{profession}</p>
            </div>
         </div>
      </div>
   );
}
