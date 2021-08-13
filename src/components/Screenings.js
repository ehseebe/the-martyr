import React from "react";
import screeningsImage from "../images/screenings.jpeg";
import "../scss/main.scss";

const Screenings = () => {
  return (

    <div className="inner-container">
    <section className="two-column text-focus-in">
      <div className="two-column__content">
      <div className="two-column__title">
          <h1> Screenings </h1>
          </div>
        
      <a href="https://prog.tsharp.xyz/en/riiff/39/film/7188/The-Martyr" target="_blank" rel="noopener noreferrer">
            <p>flickers.39, Rhode Island International Film Festival, June 13th, 2021</p>
            </a>
      </div>

      <div className="two-column__image">
        <div className="image__wrap">
          <img
            src={screeningsImage}
            alt="margot at the castle"
            border="0"
          ></img>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Screenings;
