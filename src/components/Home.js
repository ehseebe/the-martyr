import React from "react";
import Martyr from "./video/martyr-video.mp4";
import "./App.css";
import "./Home.css";

const Home = () => {
  return (
    <>
    <video className="martyr-video" autoPlay loop muted>
          <source src={Martyr} type="video/mp4" />
        </video>

      <section>
        <div className="main-title-overlay">
          <h1 className="main-title fade-in-bottom">The Martyr</h1>
          <h4 className="main-subtitle fade-in-top">
            A short film by Edmund Stenson
          </h4>

          <button className="homepage-cta"> enter </button>
        </div>

        
      </section>
      
    </>
  );
};

export default Home;
