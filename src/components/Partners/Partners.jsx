import React from "react";
import banner from "../../assets/images/clients-banner.png";
import "./index.css";

export default function Partners() {
   return (
      <div className="partners">
         <h2 className="partners__title main-title">
            Empresas que trabalham conosco
         </h2>
         <figure className="partners__banner">
            <img className="partners__image" src={banner} alt="" />
         </figure>
      </div>
   );
}
