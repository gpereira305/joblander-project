import React, { useEffect, useState } from "react";
import FrequentQuestions from "./components/FrequentQuestions/FrequentQuestions";
import FeatureSection from "./components/FeatureArea/FeatureSection";
import Footer from "./components/Footer/Footer";
import HeroSlider from "./components/HeroSlider/Hero";
import Header from "./components/MainHeader/Header";
import Partners from "./components/Partners/Partners";
import { featureData, faqData } from "./data";

function App() {
   const [isToggle, setIsToggle] = useState(false);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setIsToggle(window.scrollY > 5);
      });
   }, []);

   return (
      <>
         <Header
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            isActive={isActive}
            setIsActive={setIsActive}
         />
         <main>
            <HeroSlider />
            <FeatureSection featureData={featureData} />
            <Partners />
            <FrequentQuestions />
         </main>

         <Footer />
      </>
   );
}

export default App;
