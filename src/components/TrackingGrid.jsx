import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((v) => v.id === selectedId)) {
      onSelect(filtered[0].id);
    }
  }, [activePartner, activeTab, filtered, onSelect, selectedId]);

  return (
    <section className="min-w-0 flex-1 overflow-y-auto bg-ibm-canvas p-4 md:p-6">
      <header className="-mx-4 -mt-4 mb-6 flex h-12 items-center justify-between border-b border-ibm-hairline px-4 md:-mx-6 md:-mt-6 md:h-16 md:px-6">
        <h2 className="text-xl font-normal text-ibm-ink">Tracking</h2>
        <button className="flex h-12 w-12 items-center justify-center text-ibm-ink-muted transition hover:bg-ibm-surface-1 hover:text-ibm-ink">
          <Search size={20} />
        </button>
      </header>

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-ibm-ink">Filter by partners</p>
        <div className="flex flex-wrap gap-2">
          {partners.map(p => (
            <button
              key={p.name}
              onClick={() => setActivePartner(activePartner === p.name ? null : p.name)}
              className={`partner-pill ${activePartner === p.name ? "active" : ""}`}
            >
              {p.name} <span className={activePartner === p.name ? "text-ibm-inverse-ink-muted" : "text-ibm-ink-subtle"}>{p.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex items-center border-b border-ibm-hairline">
        {tabs.map(t => (
          <button
            key={t.label}
            onClick={() => setActiveTab(t.label)}
            className={`tab-btn px-4 ${activeTab === t.label ? "active" : ""}`}
          >
            {t.label} <span className="ml-1 text-xs text-ibm-ink-subtle">{t.count}</span>
          </button>
        ))}
      </div>

      <div className="grid max-w-[980px] grid-cols-1 gap-4 2xl:grid-cols-2">
        {filtered.map(v => (
          <div
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`tracking-card ${selectedId === v.id ? "active" : ""}`}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="whitespace-nowrap text-base font-semibold text-ibm-ink">{v.id}</h3>
              <StatusBadge status={v.status} color={v.statusColor} />
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 space-y-2 text-sm">
                <div className="font-medium text-ibm-ink">{v.time}</div>
                <div className="text-ibm-ink-muted">{v.distance}</div>
              </div>
              <div className="flex-1 space-y-1.5">
                {v.stops.slice(0, 4).map((stop, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-ibm-ink-muted">
                    <div className={`h-1.5 w-1.5 ${i === 0 ? "bg-ibm-primary" : "bg-ibm-surface-2"}`} />
                    <span className="truncate">{stop}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 text-sm text-ibm-ink-muted">{v.partner}</div>
            <div className="-mx-5 -mb-5 mt-4 border-t border-ibm-hairline bg-ibm-surface-1 px-5 pb-3 pt-2">
              <TruckSVG type={v.type} className="h-12 w-full text-ibm-ink-muted" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
