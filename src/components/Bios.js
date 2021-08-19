import React from "react";
import edmundStenson from "../images/edmund-stenson.jpeg";
import robbieWard from "../images/robbie-ward.jpeg";
import martyrPoster from "../images/martyr-poster.jpeg";
import "../scss/main.scss";

const Bios = () => {
  return (
    <div className="inner-container bios">
      {/* Ed */}
      <section className="two-column text-focus-in">
        <div className="two-column__content">
          <div className="two-column__title">
            <h2>
              {" "}
              <a
                href="http://edmundstenson.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edmund Stenson{" "}
              </a>
            </h2>
          </div>
          <p>
            Edmund Stenson’s work as documentary director, producer and editor
            focuses on social issues, loners and nomads. In 2018, he directed
            the award-winning Finding Fukue, the viral CBC success which has
            amassed over 11 million views online, and in 2021, The Martyr, a
            gothic fairytale about medieval super villain Gilles de Rais, and
            the woman obsessed with proving his innocence. He has also cut
            award-winning documentary features, shorts and TV series in English,
            French, and Japanese: most notably, Canadian Screen Award winner
            Being Black in Toronto (2020) Ciao Plastique (2020), Ghosts of Our
            Forest (2017), Ma vie Made in Canada (2017), Sourtoe: The Story of
            the Sorry Cannibal, and Retour aux sources/The Roots Remain (2015).
          </p>

          <p>
            In 2021, he is working with Daniel Roher on the director's next
            feature, and the MRC feature documentary Sweepstakes Hero. He is
            also in late development on an authorized biodoc of cult musician
            Lee Hazlewood, entitled{" "}
            <a
              class="cta-link"
              href="https://vimeo.com/573786667"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cowboy in Sweden
            </a>
            .
          </p>
        </div>

        <div className="two-column__image">
          <a
            href="http://edmundstenson.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="image__wrap"
          >
            <img
              src={edmundStenson}
              alt="Edmund Stenson wearing a Leicester Premier League champions hat and a jean jacket, holding a film camera"
              border="0"
            ></img>
          </a>
        </div>
      </section>

      {/* Robbie */}
      <section className="two-column text-focus-in">
        <div className="two-column__image">
          <a
            href="https://www.robbiewardillustration.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="image__wrap"
          >
            <img
              src={robbieWard}
              alt="Robbie Ward wearing plastic round eyeglasses and a turquoise tshirt, holding his black and white cat Boba"
              border="0"
            ></img>
          </a>
        </div>

        <div className="two-column__content align-right">
          <div className="two-column__title">
            <h2>
              <a
                href="https://www.robbiewardillustration.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Robbie Ward{" "}
              </a>
            </h2>
          </div>
          <p>
            Robbie Ward is an illustrator, animator, composer, and author from
            Colorado. His hand-illustrated animations have been screened at film
            festivals around the world such as Slamdance Film Festival and
            Atlanta Film Festival, the most recent of which, Annihilation,
            received the Award for Best Animated Film at the Ann Arbor Film
            Festival.{" "}
          </p>
          <p>
            {" "}
            Robbie is inspired by monster movies, medieval artwork, and classic
            cartoons, with a passion for the work of William Blake, Maurice
            Sendak, and Ul de Rico. He can usually be found happily at work in
            his studio with his trusty friend Boba.
          </p>
        </div>
      </section>

      {/* Crew listing */}

      <section className="two-column text-focus-in">
        <div className="two-column__content">
          <div className="reading-category-card">
            <h2 className="reading-category-card__header">Credits</h2>
            <ul>
              <li>
                <p>A film by Edmund Stenson</p>
              </li>
              <li>
                <p>Animation: Robbie Ward</p>
              </li>
              <li>
                <p>Writer[s]: Jennifer Handsel and Edmund Stenson</p>
              </li>
              <li>
                <p>Producer: Melanie Lanza</p>
              </li>
              <li>
                <p>Original Score: Steve Wright</p>
              </li>
              <li>
                <p>Cinematography: Dimitris Mastroyiannis and Tom McCagherty</p>
              </li>
              <li>
                <p>Editor[s]: James Varley and Edmund Stenson</p>
              </li>
              <li>
                <p>Color: Morgana McKenzie</p>
              </li>
              <li>
                <p>Sound Mix/Design: Abby Austria</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="two-column__image">
          <a href="https://vimeo.com/503848711"
                target="_blank"
                rel="noopener noreferrer" className="image__wrap">
            <img
              src={martyrPoster}
              alt="Poster for The Martyr with young Margot wearing a black collared shirt at the castle of Gilles de Rais with the title of the film over her head in beige and red"
              border="0"
            ></img>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Bios;
