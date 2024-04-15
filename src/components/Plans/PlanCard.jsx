import React from "react";
import { Link } from "react-scroll";
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
         <Link
            className="plans__card-button button__layout"
            smooth={true}
            spy={true}
            duration={200}
            to={"register"}
         >
            Contate nos
         </Link>
      </article>
   );
}
