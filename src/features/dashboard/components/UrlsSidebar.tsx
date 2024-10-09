import { ActiveTool } from "@/features/global/types";
import ToolSidebarHeader from "./ToolSidebarHeader";
import { cn } from "@/lib/utils";
import { ToolSidebarClose } from "./ToolSidebarClose";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import UrlSidebarItem from "./UrlSidebarItem";
import { VideoUrl } from "@/features/dashboard/types";

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
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "urls" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Urls"
        description="Video list to select and play"
      />
      <ScrollArea>
        {urls.length > 0 ? (
          urls.map((url: VideoUrl) => (
            <UrlSidebarItem key={url.id} videoUrl={url} />
          ))
        ) : (
          //TODO: implementar botão para cadastrar URL ou redirecionar para o AddUrlForm
          <p>Nenhuma URL disponível.</p>
        )}
      </ScrollArea>

      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};

export default UrlsSidebar;
