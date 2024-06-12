import AboutUs from "./components/AboutUs";
import DeliveryService from "./components/DeliveryService";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PopularNow from "./components/PopularNow";
import SpecialMenu from "./components/SpecialMenu";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <PopularNow />
      <DeliveryService />
      <AboutUs />
      <SpecialMenu />
      <DiscountBanner />
      <Footer />
    </>
  );
};

export default App;
