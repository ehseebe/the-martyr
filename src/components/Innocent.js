import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./Innocent.css";

const Innocent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="container-body-innocent">
      <div className="innocent__header">
        <i>
          <h1> Was Gilles de Rais innocent? </h1>
        </i>
        <div className="innocent__header--intro">
          <p>
            Here we offer a number of interview excerpts in which Margot offers
            potential reasons for Gilles de Rais’ innocence.{" "}
          </p>
          <p className="innocent__header--intro-crossout">
            These largely relate to the posthumous trial record.
          </p>
          <p>We leave it to you to make up your minds...</p>
        </div>
      </div>

      <div className="innocent__content">
        <div className="innocent__content--video-wrapper">
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="253511068"
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            VIEW DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Innocent;
