import { useState } from "react";
import { Hint } from "@/features/global/components/Hint";
import { useUrls } from "../hooks/useUrls";
import { OctagonX, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusDisplay from "@/features/dashboard/components/StatusDisplay";
import { ActiveTool } from "@/features/global/types";
import EditUrlForm from "@/features/dashboard/components/EditUrlForm";
import Modal from "@/features/global/components/Modal";

interface ToolbarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}
const Toolbar = ({ activeTool, onChangeActiveTool }: ToolbarProps) => {
  const { currentUrl, clear } = useUrls();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="shrink-0 h-[46px] border-b bg-white w-full flex items-center overflow-x-auto z-[49] p-2 gap-x-2">
      {currentUrl?.url && (
        <>
          <Hint label="Click to edit">
            <span
              onClick={handleOpenEditModal}
              className="hover:bg-slate-100 cursor-pointer"
            >
              {currentUrl?.name} -{" "}
              <span className="text-sm italic">{currentUrl.url}</span>
            </span>
          </Hint>
          <Modal
            isOpen={isEditModalOpen}
            onClose={handleCloseEditModal}
            title="Edit URL"
            description="Update the name or URL for the selected video"
          >
            <EditUrlForm onClose={handleCloseEditModal} />
          </Modal>
        </>
      )}
      {currentUrl?.url && (
        <div className="flex items-center h-full justify-center">
          <Hint label="Clear Current Video" side="bottom" sideOffset={5}>
            <Button onClick={clear} size="icon" variant="ghost">
              <OctagonX className="size-4" />
            </Button>
          </Hint>
        </div>
      )}

      {!currentUrl?.url && activeTool !== "urls" && (
        <div className="flex items-center h-full justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChangeActiveTool("urls")}
            className="flex items-center"
          >
            <span className="mr-2 text-md font-medium">
              Select a url to play
            </span>
            <ChevronDown className="size-4" />
          </Button>
        </div>
      )}

      <div className="relative flex items-center h-full ml-auto">
        <StatusDisplay />
      </div>
    </div>
  );
};

export default Toolbar;
