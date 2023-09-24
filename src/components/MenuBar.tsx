// MenuBar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CSS/MenuBar.css";
import "font-awesome/css/font-awesome.min.css";
import { useQuantity } from "../contexts/QuantityContext";

const MenuBar: React.FC = () => {
  const { quantity, setQuantity } = useQuantity();

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
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
        <div className="menu-icon" onClick={() => setShowSidebar(true)}>
          <i className="fa fa-bars"></i>
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

        <Link to="/cart">
          <div className="cart-icon">
            <i className="fa fa-shopping-cart"></i>

            {quantity > 0 ? (
              <span className="cart-count">{quantity}</span>
            ) : null}
          </div>
        </Link>
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
            <Link to="/">Startside</Link>
          </li>
          <li>
            <Link to="/terms">Vilkår og personvern</Link>
          </li>
          <li>
            <Link to="/">Samarbeid med oss</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
