import { useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock,
  Package,
  Search,
  Truck,
  Users,
} from "lucide-react";
import { partners, vehicles } from "../data/vehicles";
import StatusBadge from "./StatusBadge";
import TruckSVG from "./TruckSVG";

export default function Dashboard({ onOpenTracking }) {
  const [activePartner, setActivePartner] = useState("All");
  const [activeTab, setActiveTab] = useState("Overview");

  const visibleVehicles = vehicles.filter((vehicle) => activePartner === "All" || vehicle.partner === activePartner);
  const activeVehicles = visibleVehicles.filter((vehicle) => vehicle.status === "On Route");
  const waitingVehicles = visibleVehicles.filter((vehicle) => vehicle.status === "Waiting");
  const nearCapacity = visibleVehicles.filter((vehicle) => vehicle.capacity >= 85);
  const avgCapacity = Math.round(visibleVehicles.reduce((sum, vehicle) => sum + vehicle.capacity, 0) / visibleVehicles.length);

  const topVehicles = [...visibleVehicles].sort((a, b) => b.capacity - a.capacity).slice(0, 4);
  const partnerLoad = partners.slice(0, 5).map((partner) => ({
    ...partner,
    active: vehicles.filter((vehicle) => vehicle.partner === partner.name && vehicle.status === "On Route").length,
  }));

  const tabs = [
    { label: "Overview", count: visibleVehicles.length },
    { label: "Exceptions", count: nearCapacity.length },
    { label: "Waiting", count: waitingVehicles.length },
  ];

  return (
    <div className="lg:h-screen lg:flex lg:overflow-hidden">
      <section className="min-w-0 flex-1 overflow-y-auto bg-ibm-canvas p-4 md:p-6">
        <header className="-mx-4 -mt-4 mb-6 flex h-12 items-center justify-between border-b border-ibm-hairline px-4 md:-mx-6 md:-mt-6 md:h-16 md:px-6">
          <div>
            <h2 className="text-xl font-normal text-ibm-ink">Dashboard</h2>
            <p className="hidden text-sm text-ibm-ink-muted sm:block">Operations overview for today</p>
          </div>
          <button className="flex h-12 w-12 items-center justify-center text-ibm-ink-muted transition hover:bg-ibm-surface-1 hover:text-ibm-ink">
            <Search size={20} />
          </button>
        </header>

        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-ibm-ink">Filter by partners</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActivePartner("All")} className={`partner-pill ${activePartner === "All" ? "active" : ""}`}>
              All <span className={activePartner === "All" ? "text-ibm-inverse-ink-muted" : "text-ibm-ink-subtle"}>{vehicles.length}</span>
            </button>
            {partners.map((partner) => (
              <button
                key={partner.name}
                onClick={() => setActivePartner(partner.name)}
                className={`partner-pill ${activePartner === partner.name ? "active" : ""}`}
              >
                {partner.name} <span className={activePartner === partner.name ? "text-ibm-inverse-ink-muted" : "text-ibm-ink-subtle"}>{partner.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-center border-b border-ibm-hairline">
          {tabs.map((tab) => (
            <button key={tab.label} onClick={() => setActiveTab(tab.label)} className={`tab-btn px-4 ${activeTab === tab.label ? "active" : ""}`}>
              {tab.label} <span className="ml-1 text-xs text-ibm-ink-subtle">{tab.count}</span>
            </button>
          ))}
        </div>

        <div className="grid max-w-[1120px] grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
          <MetricTile icon={Truck} label="Active trucks" value={activeVehicles.length} helper={`${visibleVehicles.length} in filtered fleet`} />
          <MetricTile icon={Clock} label="Waiting" value={waitingVehicles.length} helper="Requests not yet moving" />
          <MetricTile icon={Package} label="Avg. capacity" value={`${avgCapacity}%`} helper={`${nearCapacity.length} near capacity`} />
          <MetricTile icon={Users} label="Partners" value={activePartner === "All" ? partners.length : 1} helper="Current scope" />
        </div>

        <div className="mt-4 grid max-w-[1120px] grid-cols-1 gap-4 xl:grid-cols-[1.4fr_1fr]">
          <section className="border border-ibm-hairline bg-ibm-canvas">
            <div className="flex items-center justify-between border-b border-ibm-hairline p-5">
              <div>
                <h3 className="text-lg font-semibold text-ibm-ink">Fleet priority</h3>
                <p className="mt-1 text-sm text-ibm-ink-muted">Highest capacity and route-sensitive trucks</p>
              </div>
              <button onClick={onOpenTracking} className="flex min-h-10 items-center gap-2 border border-ibm-primary bg-ibm-canvas px-3 text-sm text-ibm-primary hover:bg-ibm-surface-1">
                Open tracking <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="divide-y divide-ibm-hairline">
              {topVehicles.map((vehicle) => (
                <button key={vehicle.id} onClick={onOpenTracking} className="grid w-full grid-cols-[1fr_auto] gap-4 p-5 text-left transition hover:bg-ibm-surface-1">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-base font-semibold text-ibm-ink">{vehicle.id}</h4>
                      <StatusBadge status={vehicle.status} color={vehicle.statusColor} />
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-ibm-ink-muted sm:grid-cols-3">
                      <span>{vehicle.partner}</span>
                      <span>{vehicle.distance}</span>
                      <span>{vehicle.stops[0]}</span>
                    </div>
                  </div>
                  <div className="w-28 text-right">
                    <div className="text-lg font-semibold text-ibm-ink">{vehicle.capacity}%</div>
                    <div className="mt-2 h-1.5 bg-ibm-surface-2">
                      <div className={`h-full ${vehicle.capacity >= 85 ? "bg-ibm-warning" : "bg-ibm-primary"}`} style={{ width: `${vehicle.capacity}%` }} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="border border-ibm-hairline bg-ibm-canvas p-5">
            <h3 className="text-lg font-semibold text-ibm-ink">Partner load</h3>
            <div className="mt-4 space-y-4">
              {partnerLoad.map((partner) => (
                <div key={partner.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ibm-ink">{partner.name}</span>
                    <span className="text-ibm-ink-muted">{partner.active} active</span>
                  </div>
                  <div className="mt-2 h-2 bg-ibm-surface-2">
                    <div className="h-full bg-ibm-primary" style={{ width: `${Math.min(100, partner.count * 4)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <aside className="border-t border-ibm-hairline bg-ibm-surface-1 p-4 lg:w-[360px] lg:shrink-0 lg:overflow-y-auto lg:border-l lg:border-t-0 md:p-6">
        <section className="border border-ibm-hairline bg-ibm-canvas p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-ibm-ink">Today</h3>
            <CalendarDays size={20} className="text-ibm-primary" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <MiniStat label="Departures" value="18" />
            <MiniStat label="Arrivals" value="12" />
            <MiniStat label="Delayed" value="3" tone="warning" />
            <MiniStat label="Resolved" value="9" tone="success" />
          </div>
        </section>

        <section className="mt-4 border border-ibm-hairline bg-ibm-canvas p-5">
          <h3 className="text-lg font-semibold text-ibm-ink">Capacity watch</h3>
          <div className="mt-4 space-y-3">
            {nearCapacity.length === 0 ? (
              <div className="flex items-center gap-3 border-l-4 border-ibm-success bg-ibm-surface-1 p-4 text-sm">
                <CheckCircle2 size={18} className="text-ibm-success" /> No capacity risks in this scope.
              </div>
            ) : (
              nearCapacity.map((vehicle) => (
                <div key={vehicle.id} className="border border-ibm-hairline bg-ibm-canvas p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-ibm-ink">{vehicle.id}</div>
                      <div className="mt-1 text-sm text-ibm-ink-muted">{vehicle.partner}</div>
                    </div>
                    <AlertTriangle size={20} className="text-[#684e00]" />
                  </div>
                  <div className="mt-3 h-1.5 bg-ibm-surface-2">
                    <div className="h-full bg-ibm-warning" style={{ width: `${vehicle.capacity}%` }} />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mt-4 border border-ibm-hairline bg-ibm-canvas p-5">
          <h3 className="text-lg font-semibold text-ibm-ink">Fleet mix</h3>
          <div className="mt-4 flex h-32 items-center justify-center bg-ibm-surface-1 p-4">
            <TruckSVG type="truck" capacity={avgCapacity} className="h-24 w-full text-ibm-ink-muted" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <MiniStat label="Trucks" value={vehicles.filter((vehicle) => vehicle.type === "truck").length} />
            <MiniStat label="Vans" value={vehicles.filter((vehicle) => vehicle.type === "van").length} />
          </div>
        </section>
      </aside>
    </div>
  );
}

function MetricTile({ icon: Icon, label, value, helper }) {
  return (
    <section className="border border-ibm-hairline bg-ibm-canvas p-5">
      <div className="flex h-10 w-10 items-center justify-center bg-ibm-surface-1 text-ibm-primary">
        <Icon size={20} />
      </div>
      <div className="mt-5 text-3xl font-normal text-ibm-ink">{value}</div>
      <div className="mt-2 text-base font-semibold text-ibm-ink">{label}</div>
      <div className="mt-1 text-sm text-ibm-ink-muted">{helper}</div>
    </section>
  );
}

function MiniStat({ label, value, tone = "default" }) {
  const toneClass = tone === "warning" ? "text-[#684e00]" : tone === "success" ? "text-[#0e6027]" : "text-ibm-ink";
  return (
    <div className="bg-ibm-surface-1 p-4">
      <div className={`text-2xl font-normal ${toneClass}`}>{value}</div>
      <div className="mt-1 text-sm text-ibm-ink-muted">{label}</div>
    </div>
  );
}
