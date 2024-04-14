import React, { useState } from "react";
import AccordionBody from "./AccordionBody";
import { useGlobalContext } from "../../context";

export default function Accordion() {
   const [active, setActive] = useState(null);
   const { faqData } = useGlobalContext();
   const handleToggle = (index) =>
      active === index ? setActive(null) : setActive(index);

   return (
      <ul className="info__accordion">
         {faqData?.map((faq, index) => {
            return (
               <AccordionBody
                  key={index}
                  active={active}
                  handleToggle={handleToggle}
                  {...faq}
               />
            );
         })}
      </ul>
   );
}
