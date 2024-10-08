"use client";

import React from "react";

import {
  FileVideo,
  DiamondPlus,
  Play,
  ChartNoAxesCombined,
} from "lucide-react";

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
          icon={Play}
          label="Player"
          isActive={activeTool === "play"}
          onClick={() => onChangeActiveTool("play")}
        />
        <SidebarItem
          icon={DiamondPlus}
          label="Add Video"
          isActive={activeTool === "add"}
          onClick={() => onChangeActiveTool("add")}
        />
        <SidebarItem
          icon={FileVideo}
          label="Manage Videos"
          isActive={activeTool === "manage"}
          onClick={() => onChangeActiveTool("play")}
        />
        <SidebarItem
          icon={ChartNoAxesCombined}
          label="Stats"
          isActive={activeTool === "stats"}
          onClick={() => onChangeActiveTool("stats")}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
