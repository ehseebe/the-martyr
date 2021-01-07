import React from 'react';
import ReactPlayer from 'react-player/lazy';
import './Trailer.css';

const Trailer = () => {
  return (
    <section>
    <ReactPlayer
    className="react-player" 
    url="https://www.youtube.com/watch?v=ZX6JZKP6w9I&feature=youtu.be" 
    width='100%'
    height='80%'
    />
    </section>
  )
}

export default Trailer;