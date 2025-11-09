import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { Asset } from "../types";

interface RecentAssetsProps {
  assets: Asset[];
}

export const RecentAssets: React.FC<RecentAssetsProps> = ({ assets }) => {
  const getStatusColor = (status: Asset["status"]) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "in-use":
        return "bg-blue-100 text-blue-800";
      case "maintenance":
        return "bg-orange-100 text-orange-800";
      case "retired":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Assets</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="space-y-3">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-gray-900">{asset.name}</p>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    asset.status
                  )}`}
                >
                  {asset.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                {asset.id} • {asset.category}
              </p>

              {asset.assignedTo && (
                <p className="text-xs text-gray-500 mt-1">
                  Assigned to: {asset.assignedTo}
                </p>
              )}
            </div>

            <span className="text-xs text-gray-500">{asset.lastUpdated}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
