import React from "react";

export default function ToggleList({ categories, filterCategory }) {
   return (
      <div className="feature__toggles">
         <h3 className="toggles__title main-title">
            Our Best Business & Financial Consulting Services
         </h3>

         <ul className="toggles__list">
            {categories?.map((category) => (
               <li
                  className="toggles__item"
                  key={category}
                  onClick={() => filterCategory(category)}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   );
}
