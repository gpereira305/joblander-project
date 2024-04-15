import React, { createContext, useContext, useEffect, useState } from "react";
import { featureData, faqData } from "./data";

const GlobalContext = createContext();

export default function AppContext({ children }) {
   const [isToggle, setIsToggle] = useState(false);
   const [isActive, setIsActive] = useState(false);
   const [showGoTopButton, setShowGoTopButton] = useState(false);

   useEffect(() => {
      const checkScrollHeight = () => {
         if (!showGoTopButton && window.scrollY > 50) {
            setShowGoTopButton(true);
         } else if (showGoTopButton && window.scrollY <= 50) {
            setShowGoTopButton(false);
         }
      };

      window.addEventListener("scroll", checkScrollHeight);
      return () => {
         window.removeEventListener("scroll", checkScrollHeight);
      };
   }, [showGoTopButton]);

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
      showGoTopButton,
   };

   return (
      <GlobalContext.Provider value={providedValues}>
         {children}
      </GlobalContext.Provider>
   );
}

export const useGlobalContext = () => useContext(GlobalContext);
