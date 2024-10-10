import { ActiveTool } from "@/features/global/types";
import ToolSidebarHeader from "./ToolSidebarHeader";
import { cn } from "@/lib/utils";
import { ToolSidebarClose } from "./ToolSidebarClose";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddUrlForm from "@/features/dashboard/components/AddUrlForm";

interface AddUrlSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

const AddUrlSidebar = ({
  activeTool,
  onChangeActiveTool,
}: AddUrlSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("dashboard");
  };
  return (
    <aside
      className={cn(
        "bg-gray-50 relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "add" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader title="Add URL" description="Add a new video URL" />
      <ScrollArea className="flex-1">
        <div className="container p-4 bg-white shadow-sm rounded-md">
          <AddUrlForm onChangeActiveTool={onChangeActiveTool} />
        </div>
      </ScrollArea>
      <div className="p-4 border-t bg-gray-100">
        <ToolSidebarClose onClick={onClose} />
      </div>
    </aside>
  );
};

export default AddUrlSidebar;
