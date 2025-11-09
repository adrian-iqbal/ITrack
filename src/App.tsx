import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./features/sidebar/app-sidebar";

import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./features/dashboard/dashboard";
import Assets from "./features/assets/assets";
import Scan from "./features/scan/scan";
import Assignments from "./features/assignments/assignments";
import Maintenance from "./features/maintenance/maintenance";
import Employees from "./features/employees/employees";
import Reports from "./features/reports/reports";
import Settings from "./features/settings/settings";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="p-4 border-b">
            <SidebarTrigger />
          </div>

          {/* Page Router Outlet */}
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
