import React from "react";
import "./CSS/FeatureBlocks.css";

const FeatureBlocks: React.FC = () => {
  const features = [
    {
      icon: "❤️",
      header: "GARANTERT KUNDETILFREDSHET",
      subtext: "Elsket av kunder over hele Norge!",
    },
    {
      icon: "🛒",
      header: "30 DAGER ANGRERETT",
      subtext:
        "Er du ikke fornøyd med ditt kjøp? Returner den og få full refusjon!",
    },
    {
      icon: "🚚",
      header: "GRATIS LEVERING",
      subtext: "Gratis levering på alle bestillinger!",
    },
    {
      icon: "📞",
      header: "DØGNÅPEN KUNDESTØTTE",
      subtext:
        "Spørsmål? ikke nøl med å kontakte oss, så hjelper vi deg så snart som mulig!",
    },
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-block">
          <div className="feature-icon" style={{ color: "#f8b912" }}>
            {feature.icon}
          </div>
          <div className="feature-header">{feature.header}</div>
          <div className="feature-subtext">{feature.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlocks;
