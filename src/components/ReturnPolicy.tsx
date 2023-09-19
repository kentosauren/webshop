// src/components/ReturnPolicy.tsx
import "./CSS/terms.css";
import React, { useEffect, useState } from "react";

const ReturnPolicy: React.FC = () => {
  const [ReturnPolicyContent, setTermsContent] = useState<string | null>(null);
  useEffect(() => {
    // Fetch the terms.txt file from the assets/txt directory
    fetch("src/assets/txt/returns.txt")
      .then((response) => response.text())
      .then((data) => {
        setTermsContent(data);
      })
      .catch((error) => {
        console.error("Error fetching return policies:", error);
      });
  }, []);

  return (
    <div className="terms">
      <pre>{ReturnPolicyContent ? ReturnPolicyContent : "Loading..."}</pre>
    </div>
  );
};

export default ReturnPolicy;
