import React from "react";
import "./Reading.css";

const Reading = () => {
  return (
    <section className="container-body-reading">
      <article className="further-reading fade-in">
        {/* <h1 className="title">Reading</h1> */}
        <p>
          Gilles de Rais has captured the European artistic imagination for
          centuries. Below, we offer a non-exhaustive list of fiction,
          non-fiction, academic literature, and other media which may interest
          you. Some argue for de Rais’ innocence, others offer gruesome accounts
          of his guilt—while others settle for an intermediate position. See
          what you think.{" "}
        </p>

          <img src="https://i.ibb.co/dLFj3bh/hero-reading.png" alt="hero-reading" border="0" className="hero"/>

        <div className="reading-category-card-grid">

        <div className="reading-category-card">
          <h2>Literary Fiction</h2>
          <ul>
            <li>1891: Là-bas, JK Huysmans</li>
            <li>1977: Dark Pageant, Edward Lucie-Smith</li>
            <li>
              1990: The Life and Death of my Lord, Gilles de Rais, Robert Nye
            </li>
          </ul>
        </div>

        <div className="reading-category-card">
          <h2>Comic Books</h2>
          <ul>
            <li>1972: Le Crapouillot - N° 22 : Love & Magic, from Gilles de Rais to Rasputin, various</li>
            <li>1989: Jhen, Jean Pleyers and Jacques Martin</li>
          </ul>
        </div>

        <div className="reading-category-card">
          <h2>Non-fiction/True Crime</h2>
          <ul>
            <li>1858: Curiosités de l’histoire de la France, Paul Lacroix</li>
            <li>1885: Gilles de Rais, Eugène Bossard</li>
            <li>1930: The Banned Lectures: Gilles de Rais, Aleister Crowley</li>
            <li>1959: The Trial of Gilles de Rais, Georges Bataille</li>
            <li>1971: The Real Bluebeard, Jean Benedetti</li>
            <li>1992: Gilles de Rais ou La Gueule du loup, Gilbert Prouteau</li>
            <li>1992: Plaidoyer pour Gilles de Rais, Jean-Pierre Bayard</li>
            <li>2005: Gilles de Rais, Jacques Heers</li>
            <li>2012: Gilles de Rais, Matei Cazacu</li>
            <li>2016: The Horrific Crimes of Gilles de Rais Revisited, Jack Smith</li>
          </ul>
        </div>

        <div className="reading-category-card">
          <h2>Academic Writing</h2>

          <ul>
            <li>1905: Gilles de Rais, Salomon Reinach</li>
            <li>1992: Gilles de Rais, de Gilbert Prouteau, ou le « Naufrage de L'Histoire », Jean Kerhervé</li>
            <li>2012: Sympathy for the Devil : Gilles de Rais and His Modern Apologists, Ben Parsons</li>
            <li>2016: Medieval Religion and its Anxieties : History and Mystery in the Other Middle Ages, Thomas A. Fudgé</li>
          </ul>
        </div>

        <div className="reading-category-card">
          <h2>Other Media</h2>

          <ul>
            <li>1893: Gilles de Retz (opera), Paul Ladmirault</li>
            <li>1962: Films sans images: Gilles de Rais (radio play) Blaise Cendrars</li>
            <li>1993: Le Tombeau de Gilles de Rais (opera), Edith Canat de Chizy</li>
            <li>2008: Godspeed on the Devil’s Thunder (music) Cradle of Filth</li>
            <li>2014: Monstrum : le terrifiant destin de Gilles de Rais (film)</li>
          </ul>
        </div>
        </div>
      </article>
    </section>
  );
};

export default Reading;
