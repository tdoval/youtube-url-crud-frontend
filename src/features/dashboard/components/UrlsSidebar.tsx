import { ActiveTool } from "@/features/global/types";
import ToolSidebarHeader from "./ToolSidebarHeader";
import { cn } from "@/lib/utils";
import { ToolSidebarClose } from "./ToolSidebarClose";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import UrlSidebarItem from "./UrlSidebarItem";
import { VideoUrl } from "@/features/dashboard/types";
import { Button } from "@/components/ui/button";

interface UrlsSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

const UrlsSidebar = ({ activeTool, onChangeActiveTool }: UrlsSidebarProps) => {
  const { urls } = useUrls();

  const onClose = () => {
    onChangeActiveTool("dashboard");
  };

  return (
    <aside
      className={cn(
        "bg-gray-50 relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "urls" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Urls"
        description="Video list to select and play"
      />
      <ScrollArea className="bg-white">
        {urls.length > 0 ? (
          urls.map((url: VideoUrl) => (
            <UrlSidebarItem key={url.id} videoUrl={url} />
          ))
        ) : (
          <div className="p-4">
            <p className="text-center">0 URLS registered</p>
            <Button
              className={`w-full bg-blue-500 text-white mt-10`}
              onClick={() => onChangeActiveTool("add")}
            >
              Add new Video URL
            </Button>
          </div>
        )}
      </ScrollArea>

      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};

export default UrlsSidebar;
