import React from "react";
import FeatureCard from "./FeatureCard";
import DottedBackground from "../DottedBg/DottedBackground";
import { useGlobalContext } from "../../context";
import "./index.css";

export default function FeatureSection() {
   const { featureData } = useGlobalContext();

   return (
      <div className="feature">
         <DottedBackground />
         <ul className="feature__list">
            {featureData?.map((feature) => (
               <FeatureCard key={feature.id} {...feature} />
            ))}
         </ul>
      </div>
   );
}
