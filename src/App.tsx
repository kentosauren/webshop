import TopBar from "./components/topBar";
import MenuBar from "./components/MenuBar";
import ImageCarouselResponsive from "./components/ImageCarouselResponsive";
import Footer from "./components/Footer";
import LoremIpsum from "./components/LoremIpsum";
import ThreeColumnSection from "./components/ThreeColumnSection";
import ItemInfo from "./components/ItemInfo";
import FeatureBlocks from "./components/FeatureBlocks";
import StarRating from "./components/StarRating";
import SparkleRow from "./components/SparkleRow";
import BuyNowButton from "./components/BuyNowButton";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./components/CSS/Colors.css";

function App() {
  return (
    <>
      <TopBar />
      <MenuBar />
      {/* body */}
      <div className="mainContent">
        <ImageCarouselResponsive />
        <ItemInfo
          name="Sample Item"
          discountedPrice={19.99}
          retailPrice={29.99}
        />
        <StarRating />
        <SparkleRow />
        <BuyNowButton />
        <LoremIpsum />
        <img
          style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
          src="./src/assets/img/2.jpg"
        ></img>
        <LoremIpsum />
      </div>
      {/* /footer */}
      <FeatureBlocks />
      <ThreeColumnSection />
      <Footer />
    </>
  );
}

export default App;
