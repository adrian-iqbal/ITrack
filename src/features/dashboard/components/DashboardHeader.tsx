import React from "react";
import { Plus, QrCode, Search, Filter, Download } from "lucide-react";

interface DashboardHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Overview of your IT assets and activities
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <QrCode size={20} />
            <span className="font-medium">Scan QR</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus size={20} />
            <span className="font-medium">Add Asset</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search assets, IDs, or users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter size={20} />
          <span className="font-medium">Filters</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={20} />
          <span className="font-medium">Export</span>
        </button>
      </div>
    </div>
  );
};
