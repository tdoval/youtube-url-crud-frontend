"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import mockData from "../mockData";

const StatsOverview = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">{mockData.totalUrls}</h2>
          <p>Total de URLs Adicionadas</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{mockData.addedLastHour}</h2>
          <p>URLs Adicionadas na Última Hora</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{mockData.modifiedUrls}</h2>
          <p>URLs Modificadas</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{mockData.deletedUrls}</h2>
          <p>URLs Deletadas</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Distribuição de URLs</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={mockData.chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              <Cell fill="#82ca9d" />
              <Cell fill="#8884d8" />
              <Cell fill="#ff8042" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          URLs Adicionadas por Hora
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData.hourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="added" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsOverview;
