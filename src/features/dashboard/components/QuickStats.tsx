import React from "react";

export const QuickStats: React.FC = () => {
  const quickStatsData = [
    { label: "Utilization Rate", value: "68%", color: "text-gray-900" },
    { label: "Avg. Asset Age", value: "2.3 years", color: "text-gray-900" },
    { label: "Due Maintenance", value: "12", color: "text-orange-600" },
    { label: "Total Value", value: "$2.4M", color: "text-gray-900" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Stats</h2>

      <div className="space-y-4">
        {quickStatsData.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between pb-4 border-b border-gray-100 ${
              index === quickStatsData.length - 1 ? "border-0" : ""
            }`}
          >
            <span className="text-sm text-gray-600">{stat.label}</span>

            <span className={`text-lg font-bold ${stat.color}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
