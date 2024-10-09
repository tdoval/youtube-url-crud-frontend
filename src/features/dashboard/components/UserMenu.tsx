import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, LogOut, UserPen } from "lucide-react";

interface UserMenuProps {
  user: string | null;
  logout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, logout }) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant={"ghost"}>
          <span className="text-lg font-bold">{user}</span>
          <ChevronDown className="size-4 ml-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-60">
        <DropdownMenuItem
          className="flex items-center gap-x-2"
          onClick={() => {}}
        >
          <UserPen className="size-8" />
          <div className="cursor-pointer">
            <p>Profile</p>
            <p className="text-xs text-muted-foreground">
              TODO: not implemented yet
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-x-2"
          onClick={logout}
        >
          <LogOut className="size-8" />
          <div className="cursor-pointer">
            <p>Logout</p>
            <p className="text-xs text-muted-foreground">
              Sign out of your account
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
