import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { CategoryStat } from '../types';

interface CategoryOverviewProps {
  categories: CategoryStat[];
}

export const CategoryOverview: React.FC<CategoryOverviewProps> = ({
  categories,
}) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Assets by Category
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
                <Icon
                  className={`${category.color.replace("bg-", "text-")}`}
                  size={24}
                />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-medium">
                  {category.name}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {category.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
