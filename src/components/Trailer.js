import React from "react";
import ReactPlayer from "react-player";
import "../scss/main.scss";

const Trailer = () => {
  return (
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=0cjYWeqnm6U"
        height="60vw"
        width="80vw"
        controls="false"
        title="The Martyr Film"
      />
  );
};

export default Trailer;
