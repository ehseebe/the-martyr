import React from "react";
import Martyr from "./video/martyr-video.mp4";
import "../scss/main.scss";

const Home = () => {
  return (
    <>
      <div class="home">
        <video className="martyr-video" autoPlay loop muted>
          <source src={Martyr} type="video/mp4" />
        </video>
        <div className="home__title">
          <a href="/synopsis">
            <div className="main-subtitle fade-in-bottom">
              <img
                src="https://i.ibb.co/qdpGbCY/the-martyr-subtitle.png"
                alt="the-martyr-subtitle"
              />
            </div>

            <div className="main-title fade-in-top">
              <img
                src="https://i.ibb.co/7WGg8bg/the-martyr-title.png"
                alt="the-martyr-main-title"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
