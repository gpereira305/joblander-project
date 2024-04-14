import React, { useRef } from "react";

export default function AccordionBody({
   handleToggle,
   active,
   question,
   id,
   answer,
}) {
   const contentEl = useRef();

   const togglerActive = active === id ? "active" : "";
   const accordionContentActive = `accordion__content ${
      active === id ? "active" : ""
   }`;
   const accordionContentStyle =
      active === id
         ? { height: contentEl?.current?.scrollHeight }
         : { height: "0px" };

   return (
      <li className="accordion__item">
         <button
            className={`accordion__button ${togglerActive}`}
            onClick={() => handleToggle(id)}
            type="button"
         >
            <span> {question}</span>
         </button>

         <div
            ref={contentEl}
            className={accordionContentActive}
            style={accordionContentStyle}
         >
            <p className="accordion__text">{answer}</p>
         </div>
      </li>
   );
}
