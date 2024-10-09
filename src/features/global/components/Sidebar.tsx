"use client";

import React from "react";

import { DiamondPlus, Play } from "lucide-react";

import { SidebarItem } from "@/features/global/components/SidebarItem";
import { ActiveTool } from "@/features/global/types";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

const Sidebar = ({ activeTool, onChangeActiveTool }: SidebarProps) => {
  return (
    <aside
      className={`bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto`}
    >
      <ul className="flex flex-col">
        <SidebarItem
          icon={DiamondPlus}
          label="Add Video"
          isActive={activeTool === "add"}
          onClick={() => onChangeActiveTool("add")}
        />
        <SidebarItem
          icon={Play}
          label="URL List"
          isActive={activeTool === "urls"}
          onClick={() => onChangeActiveTool("urls")}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
