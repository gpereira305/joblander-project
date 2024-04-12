import React from "react";
import { featureData } from "../../data";

export default function Cards() {
   return (
      <ul className="feature__list">
         {featureData?.map(({ icon, title, message, id }) => (
            <li className="feature__card" key={id}>
               <figure className="feature__image">
                  <img className="feature__img" src={icon} alt="Icon" />
               </figure>

               <article className="feature__content">
                  <h2 className="feature__title">{title}</h2>
                  <p className="feature__message">{message}</p>
               </article>
            </li>
         ))}
      </ul>
   );
}
