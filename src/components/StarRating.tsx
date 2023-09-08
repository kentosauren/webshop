import React, { useState } from "react";
import "./CSS/StarRating.css";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(5);

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className="interactive-star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${index <= rating ? "selected" : ""}`}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
