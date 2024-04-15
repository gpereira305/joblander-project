import React from "react";
import FrequentQuestions from "./components/FrequentQuestions/FrequentQuestions";
import FeatureSection from "./components/FeatureArea/FeatureSection";
import Footer from "./components/Footer/Footer";
import HeroSlider from "./components/HeroSlider/Hero";
import Header from "./components/MainHeader/Header";
import Partners from "./components/Partners/Partners";
import CommentsSlider from "./components/Comments/CommentsSlider";
import Plans from "./components/Plans/Plans";
import SignUp from "./components/Form/SignUp";
import GoTop from "./components/GoTop/GoTop";

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
            <Plans />
            <SignUp />
            <GoTop />
         </main>

         <Footer />
      </>
   );
}

export default App;
