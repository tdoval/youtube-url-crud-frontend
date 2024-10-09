"use client";
import React, { useCallback, useState } from "react";
import Sidebar from "../../global/components/Sidebar";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";
import Navbar from "@/features/global/components/Navbar";
import { ActiveTool } from "@/features/global/types";
import UrlsSidebar from "./UrlsSidebar";
import Toolbar from "./Toolbar";
import AddUrlSidebar from "./AddUrlSidebar";
import StatsSidebar from "./StatsSidebar";

const Dashboard = () => {
  useRequireAuth();

  const [activeTool, setActiveTool] = useState<ActiveTool>("dashboard");

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === activeTool) {
        return setActiveTool("dashboard");
      }
      setActiveTool(tool);
    },
    [activeTool],
  );

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <AddUrlSidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <UrlsSidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StatsSidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
