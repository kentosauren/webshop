import React from "react";

interface RatingProps {
  rating: number;
  reviews: number;
}

const Rating: React.FC<RatingProps> = ({ rating, reviews }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ fontSize: "24px" }}>{rating.toFixed(2)}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return index < Math.round(rating) ? (
              <span
                key={index}
                role="img"
                aria-label="star"
                style={{ color: "gold" }}
              >
                ★
              </span>
            ) : (
              <span key={index} role="img" aria-label="star-outlined">
                ☆
              </span>
            );
          })}
      </div>
      <div>{reviews} anmeldelser</div>
    </div>
  );
};

export default Rating;
