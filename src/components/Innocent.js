import React, { useState } from "react";
import VideoModal from './VideoModal';
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
        <VideoModal videoId="253511068" />
      </div>
    </section>
  );
};

export default Innocent;
