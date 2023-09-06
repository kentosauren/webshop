// FullScreenImage.tsx
import React from "react";
import "./CSS/FullScreenImage.css"; // Adjust this path to where your FullScreenImage.css file is located

const FullScreenImage: React.FC = () => {
  return (
    <div className="full-screen-image">
      <img src="src/assets/img/scenery.jpg" alt="Description" />
    </div>
  );
};

export default FullScreenImage;
