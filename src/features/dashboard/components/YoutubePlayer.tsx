import React from "react";
import ReactPlayer from "react-player/youtube";
import { useUrls } from "@/features/dashboard/hooks/useUrls";

const YoutubePlayer = () => {
  const { currentUrl } = useUrls();
  return (
    <div className="w-full h-64">
      {currentUrl ? (
        <ReactPlayer url={currentUrl.url} width="100%" height="100%" controls />
      ) : (
        <p>Selecione uma URL para assistir</p>
      )}
    </div>
  );
};

export default YoutubePlayer;
