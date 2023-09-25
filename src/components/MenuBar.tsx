import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CSS/MenuBar.css";
import "font-awesome/css/font-awesome.min.css";

const MenuBar: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [scrolling, setScrolling] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    localStorage.setItem("itemQuantity", newQuantity.toString());
  };

  useEffect(() => {
    // Fetch the initial quantity from local storage
    const initialQuantity = localStorage.getItem("itemQuantity");
    if (initialQuantity) {
      setQuantity(Number(initialQuantity));
    }

    // Function to handle custom event
    const handleItemQuantityUpdated = () => {
      const updatedQuantity = localStorage.getItem("itemQuantity");
      if (updatedQuantity) {
        setQuantity(Number(updatedQuantity));
      }
    };

    // Listen for the custom event
    window.addEventListener("itemQuantityUpdated", handleItemQuantityUpdated);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {scrolling && <div className="menu-bar-placeholder"></div>}
      <div
        ref={menuBarRef}
        className={`menu-bar ${scrolling ? "scrolling" : ""}`}
      >
        <div style={{ paddingLeft: "10px" }}>
          <div className="menu-icon" onClick={() => setShowSidebar(true)}>
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <Link to="/">
          <div className="logo">
            <img
              width="150px"
              src="./src/assets/img/metago/logoSmall.jpg"
              alt="Logo"
            ></img>
          </div>
        </Link>

        <div style={{ paddingRight: "10px" }}>
          <Link to="/cart">
            <div className="cart-icon">
              <i className="fa fa-shopping-cart"></i>
              {quantity > 0 ? (
                <span className="cart-count">{quantity}</span>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
      <div className={`overlay ${showSidebar ? "show" : ""}`}></div>
      <div ref={sidebarRef} className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-header">
          <span>Menu</span>
          <span className="close-icon" onClick={() => setShowSidebar(false)}>
            <i className="fa fa-times"></i>
          </span>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Startside
            </Link>
          </li>
          <li>
            <Link to="/terms" onClick={closeSidebar}>
              Vilkår og personvern
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Samarbeid med oss
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
