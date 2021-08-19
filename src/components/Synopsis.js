import React from "react";
import synopsisImage from "../images/synopsis.jpeg"
import "../scss/main.scss";

const Synopsis = () => {
  return (
    <div className="inner-container synopsis text-focus-in">
      <section className="two-column">
        <div className="two-column__content">
        <div className="two-column__title">
          <h1> Synopsis </h1>
          </div>
          <p>
          There is only one thing Margot Juby cares about more than poisonous plants and doll-collecting, and that's seeing her life's work completed: the exoneration of the world's oldest serial killer and gothic supervillain, Gilles de Rais. Armed with fresh evidence, she won't rest until everyone knows: de Rais was a medieval hero, and the most handsome man in the world. 
          </p>
          
          <p>
          A quirky, docu-fairytale brought to life through hand-illustrated animation, The Martyr paints a sinister—yet compassionate—portrait of two outcasts, and the obsessions that bind them. In an era of true-crime fever and cancelled kingpins, the film leads us to wonder: what does it mean to love your hero—when he might also be a monster?
          </p>
        
        </div>

        <div className="two-column__image">
          <div className="image__wrap">
            <img
              src={synopsisImage}
              alt="margot at the castle"
              border="0"
            ></img>
          </div>
        </div>

      </section>
      <div className="screening-note">
        <p>For screening opportunities please contact themartyrfilm[a]gmail.com.</p>
      </div>
    </div>
  );
};

export default Synopsis;
