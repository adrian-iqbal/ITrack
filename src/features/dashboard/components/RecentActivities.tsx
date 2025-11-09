import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { Activity } from "../types";

interface RecentActivitiesProps {
  activities: Activity[];
}

export const RecentActivities: React.FC<RecentActivitiesProps> = ({
  activities,
}) => {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "assigned":
        return "📤";
      case "returned":
        return "📥";
      case "maintenance":
        return "🔧";
      case "added":
        return "➕";
      default:
        return "📋";
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case "assigned":
        return `${activity.asset} assigned to ${activity.user}`;
      case "returned":
        return `${activity.asset} returned by ${activity.user}`;
      case "maintenance":
        return `${activity.asset} sent to maintenance`;
      case "added":
        return `${activity.asset} added to inventory`;
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg shrink-0">
              {getActivityIcon(activity.type)}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                {getActivityText(activity)}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
