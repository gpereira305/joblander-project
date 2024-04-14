import React, { createContext, useContext, useEffect, useState } from "react";
import { featureData, faqData } from "./data";

const GlobalContext = createContext();

export default function AppContext({ children }) {
   const [isToggle, setIsToggle] = useState(false);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setIsToggle(window.scrollY > 5);
      });
   }, []);

   const providedValues = {
      isToggle,
      setIsToggle,
      isActive,
      setIsActive,
      featureData,
      faqData,
   };

   return (
      <GlobalContext.Provider value={providedValues}>
         {children}
      </GlobalContext.Provider>
   );
}

export const useGlobalContext = () => useContext(GlobalContext);
