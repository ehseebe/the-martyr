import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import './Trailer.css';

const Trailer = () => {
  return (
    <section className="trailer">
      <ReactPlayer
      className="react-player" 
      url="https://vimeo.com/503848711" 
      playing="true"
      loop="true"
      title="The Martyr Film"
      />
    </section>
  )
}

export default Trailer;