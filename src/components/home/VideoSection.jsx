import React from "react";
import ReactPlayer from "react-player";

function VideoSection() {
  return (
    <div className="video-wrapper my-16 rounded-md shadow-xl max-w-full h-[50vh] md:h-[80vh] overflow-hidden z-0">
      <ReactPlayer
        url="https://youtu.be/n7ZfUiWBTnE?si=VGxtLx0K2pXviRVc"
        controls={true}
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default VideoSection;
