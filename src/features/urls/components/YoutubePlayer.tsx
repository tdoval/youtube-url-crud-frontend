import React from "react";
import ReactPlayer from "react-player/youtube";

interface YoutubePlayerProps {
  url: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ url }) => {
  return (
    <div className="w-full h-64">
      <ReactPlayer url={url} width="100%" height="100%" controls />
    </div>
  );
};

export default YoutubePlayer;
