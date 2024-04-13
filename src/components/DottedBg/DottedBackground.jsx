import React from "react";
import DottedBg from "../../assets/images/faq-shape.png";
import "./index.css";

export default function DottedBackground() {
   return (
      <figure className="dotted-bg">
         <img className="dotted-bg__image" src={DottedBg} alt="Banner" />
      </figure>
   );
}
