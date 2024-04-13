import React from "react";
import faqBg from "../../assets/images/faq-banner.png";
import "./index.css";
import Accordion from "./Accordion";
import DottedBackground from "../DottedBg/DottedBackground";

export default function FrequentQuestions() {
   // const togglerStyle = (el) => "info__faq" + (el.open ? " open" : "");

   return (
      <section className="info">
         <h2 className="info__title main-title">Questions</h2>
         <div className="info__container">
            <Accordion />

            <figure className="info__banner">
               <img className="info__image" src={faqBg} alt="" />
            </figure>
            <DottedBackground />
         </div>
      </section>
   );
}
