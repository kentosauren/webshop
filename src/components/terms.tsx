// src/components/Terms.tsx
import "./CSS/terms.css";
import React, { useEffect, useState } from "react";

const Terms: React.FC = () => {
  const [termsContent, setTermsContent] = useState<string | null>(null);
  useEffect(() => {
    // Fetch the terms.txt file from the assets/txt directory
    fetch("src/assets/txt/terms.txt")
      .then((response) => response.text())
      .then((data) => {
        setTermsContent(data);
      })
      .catch((error) => {
        console.error("Error fetching terms:", error);
      });
  }, []);

  return (
    <div className="terms">
      <pre>{termsContent ? termsContent : "Loading..."}</pre>
    </div>
  );
};

export default Terms;
