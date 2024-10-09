import { useUrls } from "../hooks/useUrls";

const StatusDisplay: React.FC = () => {
  const { currentUrl, status } = useUrls();

  const getStatusMessage = () => {
    switch (status) {
      case "isPlaying":
        return `Playing now: ${currentUrl?.name || "Unknown"}`;
      case "isPaused":
        return `Paused: ${currentUrl?.name || "Unknown"}`;
      case "isStopped":
        return "Stopped";
      case "noVideoSelected":
        return "No video selected";
      default:
        return "Ready";
    }
  };

  return (
    <div className="text-sm font-medium text-green-800">
      {getStatusMessage()}
    </div>
  );
};

export default StatusDisplay;
