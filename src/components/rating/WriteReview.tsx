import React from "react";

const WriteReview: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        Del opplevelsen din
      </div>
      <div style={{ marginBottom: "20px", color: "gold" }}>★★★★★</div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Skriv en anmeldelse
      </button>
    </div>
  );
};

export default WriteReview;

// Example usage:
// <WriteReview />
