import React, { useRef, useEffect, useState } from "react";
import "./CSS/BuyNowButton.css";
import "font-awesome/css/font-awesome.min.css";

const BuyNowButton: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    localStorage.setItem("itemQuantity", newQuantity.toString());
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    localStorage.setItem("itemQuantity", newQuantity.toString());

    // Dispatch a custom event to notify other components about the update
    window.dispatchEvent(new Event("itemQuantityUpdated"));
  };

  useEffect(() => {
    // Get the initial quantity value from local storage if it exists
    const initialQuantity = localStorage.getItem("itemQuantity");
    if (initialQuantity) {
      setQuantity(Number(initialQuantity));
    }

    const handleScroll = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        if (rect.bottom < 57) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="buy-now-button"
        onClick={incrementQuantity}
      >
        <i className="fa fa-shopping-bag icon"></i>
        <span className="text">KJØP NÅ</span>
      </button>
      <button
        className={`buy-now-button sticky ${isSticky ? "visible" : "hidden"}`}
        onClick={incrementQuantity}
      >
        <i className="fa fa-shopping-bag icon"></i>
        <span className="text">KJØP NÅ</span>
      </button>
    </>
  );
};

export default BuyNowButton;
