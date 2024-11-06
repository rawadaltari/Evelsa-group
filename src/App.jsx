import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./component/Nav/NavBar";
import Navtop from "./component/NavTop/Navtop";
import Hero from "./component/Hero/Hero";

import Category from "./component/Category/Category";
import FlashSelas from "./component/FlashSelas/FlashSelas";
import BestSeles from "./component/BestSeles/BestSeles";
import SecImg from "./component/SectionImg/SecImg";
import OurProduct from "./component/OurProduct/OurProduct";
import NewArrival from "./component/New Arrival/NewArrival";
import Work from "./component/WorkFlow/Work";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navtop />
      <NavBar />
      <Hero />
      <FlashSelas />
      <Category />
      <BestSeles/>
      <SecImg/>
      <OurProduct/>
      <NewArrival/>
      <Work/>
      <Footer/>
    </>
  );
}

export default App;
