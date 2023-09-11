import React from "react";
import "./CSS/FeatureBlocks.css";
import "font-awesome/css/font-awesome.min.css";

const FeatureBlocks: React.FC = () => {
  const features = [
    {
      icon: "fa-heart",
      header: "GARANTERT KUNDETILFREDSHET",
      subtext: "Elsket av kunder over hele Norge!",
    },
    {
      icon: "fa-shopping-cart",
      header: "30 DAGER ANGRERETT",
      subtext:
        "Er du ikke fornøyd med ditt kjøp? Returner den og få full refusjon!",
    },
    {
      icon: "fa-truck",
      header: "GRATIS LEVERING",
      subtext: "Gratis levering på alle bestillinger!",
    },
    {
      icon: "fa-comment",
      header: "DØGNÅPEN KUNDESTØTTE",
      subtext:
        "Spørsmål? ikke nøl med å kontakte oss, så hjelper vi deg så snart som mulig!",
    },
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-block">
          <div className="feature-icon">
            <i
              className={`fa ${feature.icon}`}
              style={{ color: "var(--orange)" }}
            ></i>
          </div>
          <div className="feature-header">{feature.header}</div>
          <div className="feature-subtext">{feature.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlocks;
