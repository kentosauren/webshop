import React, { useRef, useEffect, useState } from "react";
import "./CSS/BuyNowButton.css";
import "font-awesome/css/font-awesome.min.css";

interface Props {
  productId: string;
}

const BuyNowButton: React.FC<Props> = ({ productId }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    localStorage.setItem("itemQuantity", newQuantity.toString());
    localStorage.setItem("productId", productId);

    window.dispatchEvent(new Event("itemQuantityUpdated"));
  };

  useEffect(() => {
    const initialQuantity = localStorage.getItem("itemQuantity");
    if (initialQuantity) {
      setQuantity(Number(initialQuantity));
    }

    const storedProductId = localStorage.getItem("productId");
    if (storedProductId && storedProductId === productId) {
      // Handle initialization based on stored productId
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
  }, [productId]);

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
