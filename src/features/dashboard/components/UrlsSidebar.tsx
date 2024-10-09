import { ActiveTool } from "@/features/global/types";
import ToolSidebarHeader from "./ToolSidebarHeader";
import { cn } from "@/lib/utils";
import { ToolSidebarClose } from "./ToolSidebarClose";
import { ScrollArea } from "@/components/ui/scroll-area";

interface UrlsSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

const UrlsSidebar = ({ activeTool, onChangeActiveTool }: UrlsSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("dashboard");
  };
  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "urls" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Urls"
        description="Video list to select and play"
      />
      <ScrollArea>{/* TODO: map com as URLS */}</ScrollArea>

      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};

export default UrlsSidebar;
