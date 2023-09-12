import React, { useState, useEffect } from "react";
import "./CSS/TopBar.css";

const TopBar: React.FC = () => {
  const [currentText, setCurrentText] = useState("HØSTSALG | 40% RABATT");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentText((prevText) =>
          prevText === "HØSTSALG | 40% RABATT"
            ? "GRATIS FRAKT PÅ ALLE BESTILLINGER"
            : "HØSTSALG | 40% RABATT"
        );
        setFade(false);
      }, 750); // 1 second to match the CSS transition duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top-bar">
      <p className={`top-bar-text ${fade ? "fade-out" : ""}`}>{currentText}</p>
    </div>
  );
};

export default TopBar;
