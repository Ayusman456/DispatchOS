import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TrackingGrid from "./components/TrackingGrid";
import DetailPanel from "./components/DetailPanel";

export default function App() {
  const [selectedId, setSelectedId] = useState("SD-752069247");

  return (
    <div className="h-screen overflow-hidden flex bg-zinc-950 text-zinc-200">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 flex overflow-hidden">
          <TrackingGrid selectedId={selectedId} onSelect={setSelectedId} />
          <DetailPanel vehicleId={selectedId} />
        </div>
      </main>
    </div>
  );
}
