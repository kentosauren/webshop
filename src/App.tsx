import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import ThreeColumnSection from "./components/ThreeColumnSection";
import FeatureBlocks from "./components/FeatureBlocks";
import Cart from "./components/checkout/Cart";
import Checkout from "./components/checkout/Checkout";
import OrderConfirmation from "./components/checkout/OrderConfirmation";
import ScrollToTop from "./components/ScrollToTop";

import ProductPage from "./components/ProductPage";
// import CheckoutWizard from "./components/checkout/CheckoutWizard";
import Terms from "./components/terms";
import ReturnPolicy from "./components/ReturnPolicy";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/CSS/Colors.css";
import "./components/CSS/GlobalUnits.css";
import "font-awesome/css/font-awesome.min.css";

//import { QuantityProvider } from "./contexts/QuantityContext";

function App() {
  return (
    <Router>
      {/* <QuantityProvider> */}
      <TopBar />
      <MenuBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/confirmation"
          element={
            <OrderConfirmation
              orderNumber={1005}
              products={[
                {
                  name: "Unlimited Leather Shoes",
                  details: "Medium / Classic / Red",
                  price: 142.0,
                  imageUrl: "src/assets/img/smartpipe.png",
                },
              ]}
              subtotal={702.0}
              taxes={62.3}
              total={764.3}
            />
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<ReturnPolicy />} />
      </Routes>
      <FeatureBlocks />
      <ThreeColumnSection />
      <Footer />
      {/* </QuantityProvider> */}
    </Router>
  );
}

export default App;
