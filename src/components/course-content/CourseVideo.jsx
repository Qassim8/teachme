import React, { useEffect, useLayoutEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

function CourseVideo({ videoId }) {


  return (
    <div className="w-full h-full">
      <video
        src="https://youtu.be/YpQcgkfQJ7c?si=L6iZ9VwnFnuaa4bo"
        controls={true}
        className="w-full h-full"
      ></video>
    </div>
  );
}

export default CourseVideo;
