import React from "react";
import "./Reading.css";

const Reading = () => {
  return (
    <section>
      <article className="further-reading">
        {/* <h1 className="title">Reading</h1> */}
        <p>
          Gilles de Rais has captured the European artistic imagination for
          centuries. Below, we offer a non-exhaustive list of fiction,
          non-fiction, academic literature, and other media which may interest
          you. Some argue for de Rais’ innocence, others offer gruesome accounts
          of his guilt—while others settle for an intermediate position. See
          what you think.{" "}
        </p>

        <div className="category__literary-fiction">
          <h2>Literary Fiction</h2>
          <ul>
            <li>1891: Là-bas, JK Huysmans</li>
            <li>1977: Dark Pageant, Edward Lucie-Smith</li>
            <li>
              1990: The Life and Death of my Lord, Gilles de Rais, Robert Nye
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Reading;
