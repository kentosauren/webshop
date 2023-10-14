import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./CSS/Cart.css";

const Cart: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (newPrice: number) => {
    setTotalPrice(newPrice);
  };

  let price = 1199;

  // Function to sync quantity with local storage
  const syncQuantity = () => {
    const storedQuantity = localStorage.getItem("itemQuantity");
    if (storedQuantity !== null) {
      setQuantity(Number(storedQuantity));
    }
  };

  useEffect(() => {
    // Initial sync
    syncQuantity();

    // Listen for changes in local storage
    window.addEventListener("storage", syncQuantity);

    // Clean up
    return () => {
      window.removeEventListener("storage", syncQuantity);
    };
  }, []);

  useEffect(() => {
    const discountedPrice = price;
    updateTotalPrice(discountedPrice);
  }, [quantity]);

  return (
    <>
      <div className="outer">
        <h1>Din handlekurv</h1>
        {quantity > 0 ? (
          <div className="container-center">
            <CartItem
              itemName="Laptop Original max pro ultra 4k"
              originalPrice={Math.round(price * 1.33)}
              discountedPrice={price}
              imageUrl="src/assets/img/smartpipe.png"
              updateTotalPrice={updateTotalPrice}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <CartTotal totalPrice={totalPrice} />
          </div>
        ) : (
          <div className="emptyBasket">
            <h1>Ingen varer i handlekurven!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
