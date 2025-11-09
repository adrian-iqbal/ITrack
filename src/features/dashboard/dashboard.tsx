import React, { useState } from "react";

import { DashboardHeader } from "./components/DashboardHeader";
import { StatsCard } from "./components/StatsCard";
import { CategoryOverview } from "./components/CategoryOverview";
import { QuickStats } from "./components/QuickStats";
import { RecentAssets } from "./components/RecentAssets";
import { RecentActivities } from "./components/RecentActivities";

import {
  stats,
  recentAssets,
  recentActivities,
  categoryStats,
} from "./data/mockData";

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <DashboardHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <CategoryOverview categories={categoryStats} />
        <QuickStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAssets assets={recentAssets} />
        <RecentActivities activities={recentActivities} />
      </div>
    </div>
  );
};

export default Dashboard;
