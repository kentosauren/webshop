import React, { useRef, useEffect, useState } from "react";
import "./CSS/BuyNowButton.css";
import "font-awesome/css/font-awesome.min.css";
import { useQuantity } from "../contexts/QuantityContext";

const BuyNowButton: React.FC = () => {
  const { quantity, setQuantity } = useQuantity();
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
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
