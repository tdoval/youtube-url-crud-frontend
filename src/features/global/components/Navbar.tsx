"use client";

import Logo from "@/features/global/components/Logo";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  LogOut,
  UserPen,
  DiamondPlus,
  FileVideo,
  ChartNoAxesCombined,
} from "lucide-react";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo src={"/dashboard"} />

      <div className="w-full flex items-center gap-x-1 h-full">
        <Link className="text-lg font-bold" href={"/"}>
          YT URL CRUD
        </Link>
        <Separator orientation="vertical" className="mx-2" />
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant={"ghost"}>
              <span className="text-lg font-medium">Actions</span>
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}} // TODO: Add functionality
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
              onClick={() => {}} // TODO: Add functionality
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
            <DropdownMenuItem
              onClick={() => {}} // TODO: Add functionality
              className="flex items-center gap-x-2"
            >
              <ChartNoAxesCombined className="size-8" />
              <div className="cursor-pointer">
                <p>Stats</p>
                <p className="text-xs text-muted-foreground">View statistics</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-auto flex items-center">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant={"ghost"}>
                <span className="text-lg font-bold">{user}</span>{" "}
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
                onClick={() => logout()}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
