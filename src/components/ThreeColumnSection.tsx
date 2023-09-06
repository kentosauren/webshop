import React from "react";
import "./CSS/ThreeColumnSection.css"; // Make sure to create this CSS file

const ThreeColumnSection: React.FC = () => {
  return (
    <div className="three-column-section">
      <div className="column">
        <p>
          Vi grunnla EazyFill for à lose problemet med sma skader pá veggene og
          listverket i hjemmet ditt. Malet vart er a tilby en enkel og effektiv
          losing for à reparere disse skadene uten a matte leie dyre
          handverkere, slik at du kan fä tilbake folelsen av et friskt hjem pá
          null tid. Stol pa EazyFill for forbedre opplevelsen av hjemmet ditt!
        </p>
      </div>
      <div className="column">
        <h2 className="bold-header">Bedriftsinformasjon</h2>
        <ul>
          <li>
            <a href="#">Brukervilkår</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h2 className="bold-header">Kundeservice</h2>
        <ul>
          <li>
            <a href="#">Spørsmål og svar</a>
          </li>
          <li>
            <a href="#">Kontakt oss</a>
          </li>
          <li>
            <a href="#">Spor din pakke</a>
          </li>
          <li>
            <a href="#">Bli forhandler</a>
          </li>
          <li>
            <a href="#">Refusjonspolicy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
