import React, { useRef, useEffect, useState } from "react";
import "./CSS/BuyNowButton.css";
import "font-awesome/css/font-awesome.min.css";

const BuyNowButton: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        if (rect.bottom < 60) {
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
      <button ref={buttonRef} className="buy-now-button">
        <i className="fa fa-shopping-bag icon"></i>
        <span className="text">KJØP NÅ</span>
      </button>
      <button
        className={`buy-now-button sticky ${isSticky ? "visible" : "hidden"}`}
      >
        <i className="fa fa-shopping-bag icon"></i>
        <span className="text">KJØP NÅ</span>
      </button>
    </>
  );
};

export default BuyNowButton;
