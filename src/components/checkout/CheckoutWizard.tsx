import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import DeliveryInfo from "./DeliveryInfo"; // Assume you have this component
import Payment from "./Payment"; // Assume you have this component
import Shipping from "./Shipping"; // Assume you have this component
import Breadcrumb from "./Breadcrumb"; // Assume you have this component

function CheckoutWizard() {
  return (
    <>
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <Breadcrumb />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliveryInfo" element={<DeliveryInfo />} />
          <Route path="/shipping" element={<Shipping />} />

          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </>
  );
}

export default CheckoutWizard;
