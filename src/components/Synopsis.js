import React from "react";
import './Synopsis.css';

const Synopsis = () => {
  return (
    <section className="container-body">
      <div className="synopsis">
        <h1 className="title fade-in-bottom"> The Martyr </h1>
        <p className="fade-in-top">
          They say never meet your heroes. 
          But what if your hero, like Margot K.
          Juby’s, is a 15th century serial killer? Gilles de Rais was a
          nobleman, decorated military statesman—and one of the grisliest
          murderers in recorded history. Or, at least, that’s what history tells
          us. But Margot’s fanatical, 20-year long research project suggests
          otherwise. According to her, de Rais was the victim of a vast
          conspiracy. <br/><br/>
          
          <a href='/innocent'><h3 className="main-subtitle">She’s so sure that she has <br/> <h3 className="synopsis-quote">"“Gilles de Rais was innocent”</h3>
          tattooed on her arm. <br/></h3></a>

          {/* <h2 className="main-subtitle">is he innocent?</h2> */}
          
          The Martyr interweaves the deeply personal story
          of how Margot came to fall in love with de Rais, with a gothic,
          animated retelling of the nobleman’s life. Along the way, the film
          uncovers an amusing plot by the French intelligentsia to exonerate the
          nobleman, and a potential conspiracy at the heart of the medieval
          French court. Painting an eerie, paranoid—yet compassionate—portrait
          of unrequited love, The Martyr is a film about the dark obsessions
          that shape all of us.
        </p>

        <a href='/timeline'><h2 className="main-subtitle">who was Gilles de Rais?</h2></a>
      </div>
    </section>
  );
};

export default Synopsis;
