import React from "react";
import check from "../../assets/icons/check.svg";

export default function PlanCard({ title, price, features }) {
   return (
      <article className="plans__card">
         <div className="plans__card-header">
            <h3 className="plans__card-title">{title}</h3>
         </div>
         <p className="plans__card-price"> {price}</p>
         <ul className="plans__card-features">
            {features?.map((feature) => (
               <li className="plans__card-feature" key={feature}>
                  {feature}
               </li>
            ))}
         </ul>
         <button className="plans__card-button button__layout" type="button">
            Contratar
         </button>
      </article>
   );
}
