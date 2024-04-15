import React from "react";
import plansBg from "../../assets/images/background-1.webp";
import PlanCard from "./PlanCard";
import { plansData } from "../../data";
import "./plans.css";

export default function Plans() {
   return (
      <section className="plans" style={{ backgroundImage: `url(${plansBg})` }}>
         <h2 className="plans__title main-title">Nossos planos</h2>

         <div className="plans__container">
            {plansData?.map((plan) => (
               <PlanCard key={plan.id} {...plan} />
            ))}
         </div>
      </section>
   );
}
