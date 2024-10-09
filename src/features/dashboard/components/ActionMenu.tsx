import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, DiamondPlus, FileVideo } from "lucide-react";

interface ActionMenuProps {
  openAddModal: () => void;
  openManageModal: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  openAddModal,
  openManageModal,
}) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant={"ghost"}>
          <span className="text-lg font-medium">Actions</span>
          <ChevronDown className="size-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-60">
        <DropdownMenuItem
          onClick={openAddModal}
          className="flex items-center gap-x-2"
        >
          <DiamondPlus className="size-8" />
          <div className="cursor-pointer">
            <p>Add Youtube URL</p>
            <p className="text-xs text-muted-foreground">
              Add a URL to the list
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={openManageModal}
          className="flex items-center gap-x-2"
        >
          <FileVideo className="size-8" />
          <div className="cursor-pointer">
            <p>Manage URLs</p>
            <p className="text-xs text-muted-foreground">
              Edit, delete or view URLs
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionMenu;
