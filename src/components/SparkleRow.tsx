// SparkleRow.tsx
import React from "react";
import "./CSS/SparkleRow.css";

const SparkleRow: React.FC = () => {
  const rows = [
    "Et must for hvert hjem",
    "Anbefales sterkt",
    "Fantastisk kvalitet",
  ];

  return (
    <div className="sparkle-container">
      {rows.map((text, index) => (
        <div key={index} className="sparkle-row">
          <span className="sparkle-icon">✨</span>
          <span className="sparkle-text">&nbsp;{text}</span>
        </div>
      ))}
    </div>
  );
};

export default SparkleRow;
