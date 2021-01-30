import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss';
import './Innocent.css'

const VideoModal = ({videoId, image, alt}) => {
    const [isOpen, setOpen] = useState(false);

    console.log("???", videoId)
    return (
        <div className="innocent__content--video-wrapper">
          <ModalVideo
            channel="vimeo"
            autoplay="true"
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
          />
            <img src={image} alt={alt}className="innocent__content__video-icon"
            onClick={() => setOpen(true)}/>
        </div>
    )
};

export default VideoModal;