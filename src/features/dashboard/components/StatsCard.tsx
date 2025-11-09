

import React from "react";
import type { Stat } from "../types";

interface StatsCardProps {
  stat: Stat;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  const Icon = stat.icon;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
          <Icon className={`text-${stat.color}-600`} size={24} />
        </div>

        <span
          className={`text-sm font-semibold ${
            stat.trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {stat.change}
        </span>
      </div>

      <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>

      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
    </div>
  );
};
