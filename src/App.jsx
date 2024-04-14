import React from "react";
import FrequentQuestions from "./components/FrequentQuestions/FrequentQuestions";
import FeatureSection from "./components/FeatureArea/FeatureSection";
import Footer from "./components/Footer/Footer";
import HeroSlider from "./components/HeroSlider/Hero";
import Header from "./components/MainHeader/Header";
import Partners from "./components/Partners/Partners";
import CommentsSlider from "./components/Comments/CommentsSlider";

function App() {
   return (
      <>
         <Header />
         <main>
            <HeroSlider />
            <FeatureSection />
            <Partners />
            <FrequentQuestions />
            <CommentsSlider />
         </main>

         <Footer />
      </>
   );
}

export default App;
