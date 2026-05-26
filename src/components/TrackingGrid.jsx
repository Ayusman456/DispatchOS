import { useState } from "react";
import { Search } from "lucide-react";
import { vehicles, partners } from "../data/vehicles";
import StatusBadge from "./StatusBadge";
import TruckSVG from "./TruckSVG";

export default function TrackingGrid({ selectedId, onSelect }) {
  const [activePartner, setActivePartner] = useState("Lockman");
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { label: "All", count: 71 },
    { label: "Active", count: 34 },
    { label: "Inactive", count: 37 },
  ];

  const filtered = vehicles.filter(v => {
    if (activePartner && v.partner !== activePartner) return false;
    if (activeTab === "Active") return v.status === "On Route";
    if (activeTab === "Inactive") return v.status === "Waiting";
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <header className="h-16 -mx-6 -mt-6 px-6 border-b border-zinc-800 flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Tracking</h2>
        <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
          <Search size={20} />
        </button>
      </header>

      <div className="mb-6">
        <p className="text-xs text-zinc-500 mb-3 font-medium">Filter by Partners</p>
        <div className="flex flex-wrap gap-2">
          {partners.map(p => (
            <button
              key={p.name}
              onClick={() => setActivePartner(activePartner === p.name ? null : p.name)}
              className={`partner-pill ${activePartner === p.name ? "active" : ""}`}
            >
              {p.name} <span className="text-zinc-500">{p.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 mb-5 border-b border-zinc-800">
        {tabs.map(t => (
          <button
            key={t.label}
            onClick={() => setActiveTab(t.label)}
            className={`tab-btn px-4 py-2.5 ${activeTab === t.label ? "active" : ""}`}
          >
            {t.label} <span className={`ml-1 text-xs ${activeTab === t.label ? "text-zinc-500" : "text-zinc-600"}`}>{t.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(v => (
          <div
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`tracking-card ${selectedId === v.id ? "active" : ""}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white text-sm">{v.id}</h3>
              <StatusBadge status={v.status} color={v.statusColor} />
            </div>
            <div className="flex gap-4">
              <div className="space-y-2 text-xs shrink-0">
                <div className="text-white font-mono">{v.time}</div>
                <div className="text-zinc-500">{v.distance}</div>
              </div>
              <div className="flex-1 space-y-1.5">
                {v.stops.slice(0, 4).map((stop, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-blue-500" : "bg-zinc-600"}`} />
                    <span className="truncate">{stop}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 text-[10px] text-zinc-600 uppercase tracking-wider">{v.partner}</div>
            <div className="mt-2 -mx-4 -mb-4 px-4 pb-3 pt-2 border-t border-zinc-800">
              <TruckSVG type={v.type} className="w-full h-12 text-zinc-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
