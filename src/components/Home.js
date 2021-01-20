import React from "react";
// import axios from "axios";
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
        <a href="/synopsis">
        <h4 className="main-subtitle fade-in-bottom">
            <img src="https://i.ibb.co/qdpGbCY/the-martyr-subtitle.png" alt="the-martyr-subtitle" />
          </h4>
          
            <h1 className="main-title fade-in-top">
            <img src="https://i.ibb.co/7WGg8bg/the-martyr-title.png" alt="the-martyr-main-title" />
          </h1>
          </a>

          {/* <figure className="circle flicker-1 shadow-inset-center">
            <a href="/timeline"><h4 className="main-subtitle">who was Gilles de Rais?</h4></a>
          </figure> */}
        </div>

        
      </section>
      
    </>
  );
};

export default Home;
