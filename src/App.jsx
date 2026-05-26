import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TrackingGrid from "./components/TrackingGrid";
import DetailPanel from "./components/DetailPanel";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [selectedId, setSelectedId] = useState("SD-752069247");
  const [activePage, setActivePage] = useState("tracking");

  return (
    <div className="min-h-screen bg-ibm-surface-1 text-ibm-ink lg:h-screen lg:overflow-hidden lg:flex">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="min-w-0 flex-1">
        {activePage === "dashboard" ? (
          <Dashboard onOpenTracking={() => setActivePage("tracking")} />
        ) : (
          <div className="lg:h-screen lg:flex lg:overflow-hidden">
            <TrackingGrid selectedId={selectedId} onSelect={setSelectedId} />
            <DetailPanel vehicleId={selectedId} />
          </div>
        )}
      </main>
    </div>
  );
}
