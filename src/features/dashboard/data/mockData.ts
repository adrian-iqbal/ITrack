

import { 
  Package, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Laptop,
  Monitor,
  Smartphone,
  Printer
} from 'lucide-react';
import type { Stat, Asset, Activity, CategoryStat } from '../types';

export const stats: Stat[] = [
  { 
    label: 'Total Assets', 
    value: '1,284', 
    change: '+12.5%', 
    trend: 'up',
    icon: Package,
    color: 'blue'
  },
  { 
    label: 'Available', 
    value: '847', 
    change: '+8.2%', 
    trend: 'up',
    icon: CheckCircle,
    color: 'green'
  },
  { 
    label: 'In Use', 
    value: '398', 
    change: '-3.1%', 
    trend: 'down',
    icon: Clock,
    color: 'orange'
  },
  { 
    label: 'Maintenance', 
    value: '39', 
    change: '+15.3%', 
    trend: 'up',
    icon: AlertCircle,
    color: 'red'
  },
];

export const recentAssets: Asset[] = [
  { 
    id: 'AST-001', 
    name: 'MacBook Pro 16"', 
    category: 'Laptop', 
    status: 'in-use', 
    assignedTo: 'John Doe', 
    lastUpdated: '2 hours ago' 
  },
  { 
    id: 'AST-002', 
    name: 'Dell Monitor 27"', 
    category: 'Monitor', 
    status: 'available', 
    assignedTo: null, 
    lastUpdated: '5 hours ago' 
  },
  { 
    id: 'AST-003', 
    name: 'iPhone 15 Pro', 
    category: 'Mobile', 
    status: 'in-use', 
    assignedTo: 'Jane Smith', 
    lastUpdated: '1 day ago' 
  },
  { 
    id: 'AST-004', 
    name: 'HP LaserJet Pro', 
    category: 'Printer', 
    status: 'maintenance', 
    assignedTo: null, 
    lastUpdated: '2 days ago' 
  },
  { 
    id: 'AST-005', 
    name: 'Lenovo ThinkPad', 
    category: 'Laptop', 
    status: 'available', 
    assignedTo: null, 
    lastUpdated: '3 days ago' 
  },
];

export const recentActivities: Activity[] = [
  { 
    id: '1', 
    type: 'assigned', 
    asset: 'MacBook Pro 16"', 
    user: 'John Doe', 
    time: '2 hours ago' 
  },
  { 
    id: '2', 
    type: 'returned', 
    asset: 'Dell Monitor 27"', 
    user: 'Sarah Wilson', 
    time: '5 hours ago' 
  },
  { 
    id: '3', 
    type: 'maintenance', 
    asset: 'HP LaserJet Pro', 
    user: 'IT Support', 
    time: '1 day ago' 
  },
  { 
    id: '4', 
    type: 'added', 
    asset: 'iPhone 15 Pro', 
    user: 'Admin', 
    time: '2 days ago' 
  },
  { 
    id: '5', 
    type: 'assigned', 
    asset: 'Lenovo ThinkPad', 
    user: 'Mike Johnson', 
    time: '3 days ago' 
  },
];

export const categoryStats: CategoryStat[] = [
  { name: 'Laptops', count: 456, icon: Laptop, color: 'bg-blue-500' },
  { name: 'Monitors', count: 382, icon: Monitor, color: 'bg-purple-500' },
  { name: 'Mobile', count: 298, icon: Smartphone, color: 'bg-green-500' },
  { name: 'Printers', count: 148, icon: Printer, color: 'bg-orange-500' },
];
