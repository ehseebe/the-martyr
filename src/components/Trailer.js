import React from 'react';
// import ReactPlayer from 'react-player/vimeo';
import './Trailer.css';

const Trailer = () => {
  return (
    <section className="trailer">
      {/* <ReactPlayer
      className="react-player" 
      url="https://vimeo.com/503848711" 
      playing="true"
      // width='100%'
      // height='80%'
      loop="true"
      /> */}
   
      <iframe src="https://player.vimeo.com/video/503848711?h=2725ebb85d" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="The Martyr Film"></iframe>
    </section>
  )
}

export default Trailer;