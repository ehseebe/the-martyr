import React from "react";
import resourcesImage from "../images/resources.jpeg";
import "../scss/main.scss";

const Reading = () => {
  return (
    <section className="inner-container">
      <div className="one-column">
        <div className="one-column__title">
          <h1> The Life of Gilles de Rais </h1>
        </div>

        <div className="one-column__intro">
          <p>
            Gilles de Rais has captured the European artistic imagination for
            centuries. Below, we offer a non-exhaustive list of fiction,
            non-fiction, academic literature, and other media which may interest
            you. Some argue for de Rais’ innocence, others offer gruesome
            accounts of his guilt—while others settle for an intermediate
            position.
          </p>

          <p>See what you think.</p>
        </div>

        <div className="one-column__image">
          <img src={resourcesImage} alt="margot at the castle" border="0"></img>
        </div>

        <div className="one-column__content">
          <div className="reading-category-card">
            <h2 className="reading-category-card__header">Literary Fiction</h2>
            <ul>
              <li>
                <p>1891: Là-bas, JK Huysmans</p>
              </li>
              <li>
                <p>1977: Dark Pageant, Edward Lucie-Smith</p>
              </li>
              <li>
                <p>
                  1990: The Life and Death of my Lord, Gilles de Rais, Robert
                  Nye
                </p>
              </li>
            </ul>
          </div>

          <div className="reading-category-card">
            <h2 className="reading-category-card__header">Comic Books</h2>
            <ul>
              <li>
                <p>
                  1972: Le Crapouillot - N° 22 : Love & Magic, from Gilles de
                  Rais to Rasputin, various
                </p>
              </li>
              <li>
                <p>1989: Jhen, Jean Pleyers and Jacques Martin</p>
              </li>
            </ul>
          </div>

          <div className="reading-category-card">
            <h2 className="reading-category-card__header">
              Non-fiction/True Crime
            </h2>
            <ul>
              <li>
                <p>1858: Curiosités de l’histoire de la France, Paul Lacroix</p>
              </li>
              <li>
                <p>1885: Gilles de Rais, Eugène Bossard</p>
              </li>
              <li>
                <p>
                  1930: The Banned Lectures: Gilles de Rais, Aleister Crowley
                </p>
              </li>
              <li>
                <p>1959: The Trial of Gilles de Rais, Georges Bataille</p>
              </li>
              <li>
                <p>1971: The Real Bluebeard, Jean Benedetti</p>
              </li>
              <li>
                <p>
                  1992: Gilles de Rais ou La Gueule du loup, Gilbert Prouteau
                </p>
              </li>
              <li>
                <p>1992: Plaidoyer pour Gilles de Rais, Jean-Pierre Bayard</p>
              </li>
              <li>
                <p>2005: Gilles de Rais, Jacques Heers</p>
              </li>
              <li>
                <p>2012: Gilles de Rais, Matei Cazacu</p>
              </li>
              <li>
                <p>
                  2016: The Horrific Crimes of Gilles de Rais Revisited, Jack
                  Smith
                </p>
              </li>
            </ul>
          </div>

          <div className="reading-category-card">
            <h2 className="reading-category-card__header">Academic Writing</h2>

            <ul>
              <li>
                <p>1905: Gilles de Rais, Salomon Reinach</p>
              </li>
              <li>
                <p>
                  1992: Gilles de Rais, de Gilbert Prouteau, ou le « Naufrage de
                  L'Histoire », Jean Kerhervé
                </p>
              </li>
              <li>
                <p>
                  2012: Sympathy for the Devil : Gilles de Rais and His Modern
                  Apologists, Ben Parsons
                </p>
              </li>
              <li>
                <p>
                  2016: Medieval Religion and its Anxieties : History and
                  Mystery in the Other Middle Ages, Thomas A. Fudgé
                </p>
              </li>
            </ul>
          </div>

          <div className="reading-category-card">
            <h2 className="reading-category-card__header">Other Media</h2>

            <ul>
              <li>
                <p>1893: Gilles de Retz (opera), Paul Ladmirault</p>
              </li>
              <li>
                <p>
                  1962: Films sans images: Gilles de Rais (radio play) Blaise
                  Cendrars
                </p>
              </li>
              <li>
                <p>
                  1993: Le Tombeau de Gilles de Rais (opera), Edith Canat de
                  Chizy
                </p>
              </li>
              <li>
                <p>
                  2008: Godspeed on the Devil’s Thunder (music) Cradle of Filth
                </p>
              </li>
              <li>
                <p>
                  2014: Monstrum : le terrifiant destin de Gilles de Rais (film)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reading;
