import React, { useState } from "react";
import Cards from "./Cards";
import ToggleList from "./ToggleList";
import ToggleGrid from "./ToggleGrid";
import background from "../../assets/images/background-1.webp";
import backgroundAlt from "../../assets/images/faq-shape.png";
import { menu } from "../../data";
import "./index.css";

const tempCategories = ["Todos", ...new Set(menu.map((item) => item.category))];
export default function FeatureSection() {
   const [menuItems, setMenuItems] = useState(menu);
   const [categories, setCategories] = useState(tempCategories);

   function filterCategory(category) {
      if (category === "Todos") return setMenuItems(menu);

      setMenuItems(menu.filter((item) => item.category === category));
   }

   return (
      <div
         className="feature"
         style={{
            backgroundImage: `url(${background})`,
         }}
      >
         <img className="feature__bg" src={backgroundAlt} alt="Banner" />
         <Cards />
         <ToggleList categories={categories} filterCategory={filterCategory} />

         <ToggleGrid menuItems={menuItems} />
      </div>
   );
}
