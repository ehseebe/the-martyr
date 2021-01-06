import React from 'react';
import Martyr from './video/martyr-video.mp4';
import './App.css';

const Home = () => {
  return (
    <section>
      <video className="martyr-video" autoPlay loop muted>
        <source src={Martyr} type='video/mp4' />
      </video>
      <div className="main-title-overlay">
      <h1 className="main-title">The Martyr</h1>
      </div>
    </section>
  )
}

export default Home;