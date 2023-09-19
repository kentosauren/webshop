import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TopBar from "./components/topBar";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import ThreeColumnSection from "./components/ThreeColumnSection";
import FeatureBlocks from "./components/FeatureBlocks";

import ProductPage from "./components/ProductPage";
import CheckoutWizard from "./components/checkout/CheckoutWizard";
import Terms from "./components/terms";
import ReturnPolicy from "./components/ReturnPolicy";

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
          <Route path="/" element={<ProductPage />} />
          <Route
            path="/checkout/*"
            element={
              <div>
                <CheckoutWizard />
              </div>
            }
          />

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
