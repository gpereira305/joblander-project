import React from "react";

export default function FeatureCard({ icon, title, message, id }) {
   return (
      <li className="feature__card" key={id}>
         <figure className="feature__image">
            <img className="feature__img" src={icon} alt="Icon" />
         </figure>

         <article className="feature__content">
            <h2 className="feature__title">{title}</h2>
            <p className="feature__message">{message}</p>
         </article>
      </li>
   );
}
