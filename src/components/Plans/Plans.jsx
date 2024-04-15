import React from "react";
import PlanCard from "./PlanCard";
import { plansData } from "../../data";
import "./plans.css";

export default function Plans() {
   return (
      <section className="plans" id="plans">
         <h2 className="plans__title main-title">Nossos planos</h2>

         <div className="plans__container">
            {plansData?.map((plan) => (
               <PlanCard key={plan.id} {...plan} />
            ))}
         </div>
      </section>
   );
}
