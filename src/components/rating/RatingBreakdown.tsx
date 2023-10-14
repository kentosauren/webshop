import React from "react";

interface RatingBreakdownProps {
  ratings: { [key: number]: number };
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({ ratings }) => {
  const totalReviews = Object.values(ratings).reduce((a, b) => a + b, 0);
  const maxRatingCount = Math.max(...Object.values(ratings));

  return (
    <div style={{ width: "300px", minWidth: "150px" }}>
      {[5, 4, 3, 2, 1].map((star) => (
        <div
          key={star}
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <div style={{ marginRight: "10px" }}>{star} ★</div>
          <div
            style={{
              flex: 1,
              height: "20px",
              backgroundColor: "#e0e0e0",
              marginRight: "10px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${(ratings[star] / maxRatingCount) * 100}%`,
                backgroundColor: "gold",
              }}
            ></div>
          </div>
          <div>({ratings[star] || 0})</div>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;

// Example usage:
// <RatingBreakdown ratings={{ 5: 16, 4: 2, 3: 0, 2: 0, 1: 0 }} />
