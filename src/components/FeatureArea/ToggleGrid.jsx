import React from "react";

export default function ToggleGrid({ menuItems }) {
   return (
      <ul className="toggles__grid">
         {menuItems?.slice(0, 4)?.map(({ title, price, img, desc, id }) => (
            <li className="toggles__block" key={id}>
               <figure className="toggles__image">
                  <img className="toggles__img" src={img} alt={title} />
               </figure>
               <div className="toggles__info">
                  <p className="item-desc">{desc}</p>
               </div>
            </li>
         ))}
      </ul>
   );
}
