import React from "react";
import faqBg from "../../assets/images/faq-banner.png";
import Accordion from "./Accordion";
import DottedBackground from "../DottedBg/DottedBackground";
import "./index.css";

export default function FrequentQuestions() {
   return (
      <section className="info">
         <div className="info__container">
            <div className="info__wrapper">
               <h2 className="info__title main-title">
                  O que oferecemos em nossa plataforma?
               </h2>
               <Accordion />
            </div>

            <figure className="info__banner">
               <img className="info__image" src={faqBg} alt="Banner" />
            </figure>
            <DottedBackground />
         </div>
      </section>
   );
}
