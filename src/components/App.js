import React from 'react';
import Martyr from './video/martyr-video.mp4';
import './App.css';

const App = () => {
  return (
    <div className="backdrop">
      Hello!
      <video className="martyr-video" autoPlay loop muted>
        <source src={Martyr} type='video/mp4' />
      </video>
    </div>
  )
}

export default App;