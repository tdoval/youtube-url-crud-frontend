"use client";
import React from "react";
import Sidebar from "./Sidebar";
import StatsOverview from "./StatsOverview";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";

const Dashboard = () => {
  useRequireAuth();

  const { user } = useAuth();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Bem-vindo, {user}!</h1>
        </div>

        <StatsOverview />
      </div>
    </div>
  );
};

export default Dashboard;
