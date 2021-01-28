import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss';

const VideoModal = ({videoId}) => {
    const [isOpen, setOpen] = useState(false);

    console.log("???", videoId)
    return (
        <div className="innocent__content--video-wrapper">
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            VIEW DEMO
          </button>
        </div>
    )
};

export default VideoModal;