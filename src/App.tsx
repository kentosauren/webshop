import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
import CheckoutWizard from "./components/checkout/CheckoutWizard";
import Terms from "./components/terms";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/CSS/Colors.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <>
        <TopBar />
        <MenuBar />
        <Routes>
          <Route
            path="/"
            element={
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
                  src="./src/assets/img/3.jpg"
                  style={{
                    width: "500px",
                    left: "auto",
                    right: "auto",
                  }}
                />

                <LoremIpsum />
              </div>
            }
          />
          <Route path="/checkout" element={<CheckoutWizard />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <FeatureBlocks />
        <ThreeColumnSection />
        <Footer />
      </>
    </Router>
  );
}

export default App;
