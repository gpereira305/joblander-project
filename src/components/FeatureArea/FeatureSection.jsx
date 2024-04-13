import React from "react";
import Cards from "./Cards";
import DottedBackground from "../DottedBg/DottedBackground";
import "./index.css";
import Partners from "../Partners/Partners";

export default function FeatureSection() {
   return (
      <div className="feature">
         <DottedBackground />
         <Cards />
         <Partners />
      </div>
   );
}
