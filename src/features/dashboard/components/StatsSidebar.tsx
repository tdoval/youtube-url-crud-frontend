import { ActiveTool } from "@/features/global/types";
import ToolSidebarHeader from "./ToolSidebarHeader";
import { cn } from "@/lib/utils";
import { ToolSidebarClose } from "./ToolSidebarClose";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StatsSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

const StatsSidebar = ({
  activeTool,
  onChangeActiveTool,
}: StatsSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("dashboard");
  };
  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "stats" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader title="Stats" description="Stats for the video list" />
      <ScrollArea>{/* TODO: criar Stats */}</ScrollArea>

      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};

export default StatsSidebar;
