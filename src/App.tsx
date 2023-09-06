import TopBar from "./components/topBar";
import MenuBar from "./components/MenuBar";
import ImageCarousel from "./components/ImageCarousel";
import ImageCarouselResponsive from "./components/ImageCarouselResponsive";
import Footer from "./components/Footer";
import LoremIpsum from "./components/LoremIpsum";
import ThreeColumnSection from "./components/ThreeColumnSection";
import ItemInfo from "./components/ItemInfo";
import FeatureBlocks from "./components/FeatureBlocks";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Colors metago
//orange f8b912
//purple 1f1949

function App() {
  return (
    <>
      <TopBar />
      <MenuBar />
      <div className="mainContent">
        <ImageCarouselResponsive />
        <ItemInfo
          name="Sample Item"
          discountedPrice={19.99}
          retailPrice={29.99}
        />
        <LoremIpsum />
        <ImageCarousel />
        <LoremIpsum />
      </div>
      <FeatureBlocks />
      <ThreeColumnSection />
      <Footer />
    </>
  );
}

export default App;
