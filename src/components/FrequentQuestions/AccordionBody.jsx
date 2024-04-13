import React, { useRef } from "react";

export default function AccordionBody({ handleToggle, active, faq }) {
   const contentEl = useRef();
   const { header, id, text } = faq;

   const togglerStyle = active === id ? "active" : "";

   return (
      <li className="accordion__item">
         <button
            className={`accordion__button ${togglerStyle}`}
            onClick={() => handleToggle(id)}
            type="button"
         >
            {header}
         </button>

         <div
            ref={contentEl}
            className={`accordion__content ${active === id ? "show" : ""}`}
            style={
               active === id
                  ? { height: contentEl?.current?.scrollHeight }
                  : { height: "0px" }
            }
         >
            <p className="accordion__text">{text}</p>
         </div>
      </li>
   );
}
