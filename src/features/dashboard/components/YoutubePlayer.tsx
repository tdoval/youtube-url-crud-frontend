import YoutubePlayer from "react-player/youtube";
import { useUrls } from "../hooks/useUrls";
import { Button } from "@/components/ui/button";

const VideoPlayer = () => {
  const { currentUrl, status, play, pause, stop } = useUrls();

  const renderButton = (
    label: string,
    onClick: () => void,
    isDisabled: boolean,
    bgColor: string,
    enabledColor: string = "text-white",
  ) => (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      className={`px-4 py-2 ${
        isDisabled ? "bg-gray-300 text-gray-700" : `${bgColor} ${enabledColor}`
      }`}
    >
      {label}
    </Button>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {currentUrl ? (
        <div className="w-full max-w-3xl h-[500px] flex flex-col items-center">
          <YoutubePlayer
            url={currentUrl.url}
            playing={status === "isPlaying"}
            controls
            width="100%"
            height="100%"
          />
          <div className="mt-4 flex space-x-4">
            {renderButton("Play", play, status === "isPlaying", "bg-green-500")}
            {renderButton(
              "Pause",
              pause,
              status !== "isPlaying",
              "bg-yellow-500",
            )}
            {renderButton("Stop", stop, false, "bg-red-500")}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No video selected</p>
      )}
    </div>
  );
};

export default VideoPlayer;
