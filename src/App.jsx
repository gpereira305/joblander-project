import Feature from "./components/FeatureArea/FeatureSection";
import Footer from "./components/Footer/Footer";
import HeroSlider from "./components/HeroSlider/Hero";
import Header from "./components/MainHeader/Header";

function App() {
   return (
      <>
         <Header />
         <main>
            <HeroSlider />
            <Feature />
         </main>

         <Footer />
      </>
   );
}

export default App;
