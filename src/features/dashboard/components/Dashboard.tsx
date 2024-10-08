"use client";
import React, { useCallback, useState } from "react";
import Sidebar from "../../global/components/Sidebar";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";
import Navbar from "@/features/global/components/Navbar";
import { ActiveTool } from "@/features/global/types";

const Dashboard = () => {
  useRequireAuth();

  const [activeTool, setActiveTool] = useState<ActiveTool>("dashboard");

  const onChangeActiveTool = useCallback((tool: ActiveTool) => {
    setActiveTool(tool);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
      </div>
    </div>
  );
};

export default Dashboard;
