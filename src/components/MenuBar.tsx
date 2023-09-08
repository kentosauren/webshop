import React, { useState, useEffect, useRef } from "react";
import "./CSS/MenuBar.css";

const MenuBar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
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

  useEffect(() => {
    if (showSidebar) {
      setTimeout(() => setShowHeader(true), 300);
    } else {
      setShowHeader(false);
    }
  }, [showSidebar]);

  return (
    <>
      {scrolling && <div className="menu-bar-placeholder"></div>}
      <div
        ref={menuBarRef}
        className={`menu-bar ${scrolling ? "scrolling" : ""}`}
      >
        <div className="menu-icon" onClick={() => setShowSidebar(true)}>
          ☰
        </div>
        <div className="logo">
          <a href="/">
            <img
              width="150px"
              src="./src/assets/img/metago/logoSmall.jpg"
              alt="Logo"
            ></img>
          </a>
        </div>
        <div className="cart-icon">
          🛒<span className="cart-count">1</span>
        </div>
      </div>
      <div className={`overlay ${showSidebar ? "show" : ""}`} />
      <div ref={sidebarRef} className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className={`sidebar-header ${showHeader ? "show" : ""}`}>
          Meny
          <span className="close-icon" onClick={() => setShowSidebar(false)}>
            ✖
          </span>
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="#">Brukervilkår</a>
          </li>
          <li>
            <a href="#">Personvernerklæring</a>
          </li>
          <li>
            <a href="#">Ledige Jobber</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
