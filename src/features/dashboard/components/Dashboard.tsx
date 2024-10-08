import React from "react";
import Sidebar from "./Sidebar";
import StatsOverview from "./StatsOverview";
import useUser from "../hooks/useUser";

const Dashboard = () => {
  const { userName } = useUser();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Bem-vindo, {userName}!</h1>
        </div>

        <StatsOverview />
      </div>
    </div>
  );
};

export default Dashboard;
