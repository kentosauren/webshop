import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TopBar from "./components/topBar";
import MenuBar from "./components/MenuBar";
import ImageCarouselResponsive from "./components/ImageCarouselResponsive";
import Footer from "./components/Footer";
import LoremIpsum from "./components/LoremIpsum";
import ThreeColumnSection from "./components/ThreeColumnSection";
import FeatureBlocks from "./components/FeatureBlocks";
import ItemCard from "./components/ItemCard";

import CheckoutWizard from "./components/checkoutOld/CheckoutWizard";
import Terms from "./components/terms";
import ReturnPolicy from "./components/ReturnPolicy";
import SalesBasket from "./components/checkout/SalesBasket";

SalesBasket;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/CSS/Colors.css";
import "./components/CSS/GlobalUnits.css";
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
                {/* <div className="responsive-layout"> */}
                <ImageCarouselResponsive />
                <ItemCard />
                {/* </div> */}

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
          <Route path="/returns" element={<ReturnPolicy />} />
        </Routes>
        <FeatureBlocks />
        <ThreeColumnSection />
        <Footer />
      </>
    </Router>
  );
}

export default App;
