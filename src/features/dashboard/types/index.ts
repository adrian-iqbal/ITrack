

import type { LucideIcon } from "lucide-react";

export interface Asset {
  id: string; 
  name: string; 
  category: string; 
  status: "available" | "in-use" | "maintenance" | "retired"; 
  assignedTo: string | null; 
  lastUpdated: string; 
}


export interface Activity {
  id: string;
  type: "assigned" | "returned" | "maintenance" | "added";
  asset: string; 
  user: string; 
  time: string; 
}


export interface Stat {
  label: string; 
  value: string; 
  change: string; 
  trend: "up" | "down"; 
  icon: LucideIcon; 
  color: string; 
}


export interface CategoryStat {
  name: string; 
  count: number; 
  icon: LucideIcon;
  color: string; 
}

