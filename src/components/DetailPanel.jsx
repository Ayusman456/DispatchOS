import { useState } from "react";
import {
  AlertCircle,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  CreditCard,
  Edit3,
  FileText,
  Flag,
  Fuel,
  Gauge,
  Layers,
  MapPin,
  Maximize,
  MessageSquare,
  Minus,
  Navigation,
  Package,
  Phone,
  Plus,
  Truck,
} from "lucide-react";
import { vehicles } from "../data/vehicles";
import TruckSVG from "./TruckSVG";

export default function DetailPanel({ vehicleId }) {
  const [activeTab, setActiveTab] = useState("Shipping Info");
  const v = vehicles.find((x) => x.id === vehicleId);
  if (!v) return null;

  const tabs = ["Shipping Info", "Vehicle Info", "Documents", "Company", "Billing"];
  const totalCapacity = v.type === "van" ? 12.0 : 20.0;
  const usedCapacity = (v.capacity / 100) * totalCapacity;
  const availableCapacity = totalCapacity - usedCapacity;
  const availablePercentage = 100 - v.capacity;

  const displayPhotos = [...v.photos];
  [
    { point: "#2", loc: "Newark Warehouse", time: "07:15 AM" },
    { point: "#3", loc: "Staten Island Hub", time: "08:02 AM" },
  ].forEach((placeholder) => {
    if (displayPhotos.length < 3 && !displayPhotos.some((p) => p.point === placeholder.point)) {
      displayPhotos.push(placeholder);
    }
  });

  return (
    <aside className="detail-panel border-t border-ibm-hairline bg-ibm-surface-1 lg:w-[520px] lg:shrink-0 lg:overflow-y-auto lg:border-l lg:border-t-0 xl:w-[560px]">
      <div className="sticky top-0 z-20 border-b border-ibm-hairline bg-ibm-canvas">
        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <span className="text-sm font-medium text-ibm-ink-muted">Truck ID</span>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-normal leading-tight text-ibm-ink">{v.id}</h2>
                <StatusLabel status={v.status} />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex min-h-12 items-center gap-2 border border-ibm-ink bg-ibm-canvas px-4 text-sm text-ibm-primary transition hover:bg-ibm-surface-1">
                <Phone size={16} /> Call
              </button>
              <button className="flex min-h-12 items-center gap-2 bg-ibm-primary px-4 text-sm text-white transition hover:bg-ibm-blue-hover">
                <MessageSquare size={16} /> Chat
              </button>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto border-t border-ibm-hairline px-4 md:px-6">
          {tabs.map((tab) => {
            const Icon = tab === "Vehicle Info" ? Gauge : tab === "Documents" ? FileText : tab === "Company" ? Building2 : tab === "Billing" ? CreditCard : Truck;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn flex shrink-0 items-center gap-2 px-4 text-sm ${activeTab === tab ? "active" : ""}`}
              >
                <Icon size={15} className="shrink-0" />
                <span>{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 p-4 md:p-6">
        <section className="border border-ibm-hairline bg-ibm-canvas p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-ibm-ink">Current truck capacity</h3>
            <CapacityState value={v.capacity} />
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_1.1fr]">
            <div className="flex min-h-36 items-center justify-center border border-ibm-hairline bg-ibm-surface-1 p-4">
              <TruckSVG type={v.type} capacity={v.capacity} className="h-24 w-full text-ibm-ink-muted" />
            </div>
            <div className="grid gap-3">
              <MetricBar icon={Package} label="Used capacity" value={`${usedCapacity.toFixed(1)} / ${totalCapacity.toFixed(1)} ton`} percent={v.capacity} color="bg-ibm-primary" />
              <MetricBar icon={Package} label="Available capacity" value={`${availableCapacity.toFixed(1)} ton (${availablePercentage}%)`} percent={availablePercentage} color="bg-ibm-success" />
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 border-l-4 border-ibm-primary bg-ibm-surface-1 p-4 text-sm text-ibm-ink">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-ibm-primary" />
            <span>{v.capacity > 90 ? "Truck is approaching maximum capacity limit." : "Truck is within the safe capacity range."}</span>
          </div>
        </section>

        <section className="border border-ibm-hairline bg-ibm-canvas p-5">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-ibm-ink">Route</h3>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ibm-ink-muted">
                <span className="flex items-center gap-1.5"><Clock size={14} /> {v.routeTime || v.time} elapsed</span>
                <span className="flex items-center gap-1.5"><Compass size={14} /> {v.routeDist || v.distance} remaining</span>
              </div>
            </div>
            <button className="flex min-h-10 items-center gap-2 border border-ibm-primary bg-ibm-canvas px-3 text-sm text-ibm-primary transition hover:bg-ibm-surface-1">
              <Edit3 size={15} /> Change route
            </button>
          </div>

          <div className="relative h-72 overflow-hidden border border-ibm-hairline bg-ibm-surface-1">
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <defs>
                <pattern id="route-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#route-grid)" />
              <path d="M 80 180 Q 150 160 180 120 T 220 80 T 280 40" fill="none" stroke="#0f62fe" strokeWidth="3" strokeLinecap="square" />
              <circle cx="80" cy="180" r="5" fill="#24a148" />
              <text x="80" y="203" textAnchor="middle" fill="#161616" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Jersey City</text>
              <g transform="translate(168, 108)">
                <rect width="24" height="24" fill="#0f62fe" />
                <foreignObject x="4" y="4" width="16" height="16">
                  <div className="flex h-full w-full items-center justify-center text-white">
                    <Truck size={13} strokeWidth={2.5} />
                  </div>
                </foreignObject>
              </g>
              <g transform="translate(268, 22)">
                <foreignObject x="0" y="0" width="24" height="24">
                  <div className="text-ibm-primary">
                    <MapPin size={22} />
                  </div>
                </foreignObject>
              </g>
              <text x="292" y="36" fill="#161616" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">New York</text>
              <text x="292" y="52" fill="#525252" fontSize="10" fontFamily="IBM Plex Sans, sans-serif">ETA 08:43 AM</text>
            </svg>

            <div className="absolute right-3 top-3 grid gap-1">
              {[Maximize, Navigation, Layers].map((Icon) => (
                <button key={Icon.displayName || Icon.name} className="flex h-8 w-8 items-center justify-center border border-ibm-hairline bg-ibm-canvas text-ibm-ink-muted hover:bg-ibm-surface-2 hover:text-ibm-ink">
                  <Icon size={14} />
                </button>
              ))}
            </div>
            <div className="absolute bottom-3 right-3 grid gap-1">
              {[Plus, Minus].map((Icon) => (
                <button key={Icon.displayName || Icon.name} className="flex h-8 w-8 items-center justify-center border border-ibm-hairline bg-ibm-canvas text-ibm-ink-muted hover:bg-ibm-surface-2 hover:text-ibm-ink">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 border border-ibm-hairline md:grid-cols-4">
            <RouteMetric icon={Gauge} label="Avg. speed" value="48 mph" />
            <RouteMetric icon={Compass} label="Traveled" value="128 mi" />
            <RouteMetric icon={Fuel} label="Fuel left" value="32%" />
            <RouteMetric icon={Clock} label="Est. arrival" value="08:43 AM" detail="On time" />
          </div>
        </section>

        <section className="border border-ibm-hairline bg-ibm-canvas p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-ibm-ink">Cargo photo reports</h3>
            <button className="flex items-center gap-1 text-sm text-ibm-primary hover:text-ibm-blue-hover">
              View all <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {displayPhotos.map((photo, index) => (
              <div key={`${photo.point}-${index}`} className="photo-thumb border border-ibm-hairline bg-ibm-canvas p-2">
                <div className="relative aspect-[4/3] bg-ibm-surface-1">
                  <div className="absolute inset-0 flex items-center justify-center text-ibm-ink-subtle">
                    <Package size={24} />
                  </div>
                  <div className="absolute bottom-1 left-1 bg-ibm-ink px-1.5 py-0.5 text-xs text-ibm-inverse-ink">{photo.time}</div>
                  {index === 0 ? (
                    <div className="absolute right-1 top-1 bg-ibm-success px-1.5 py-0.5 text-xs text-white">Latest</div>
                  ) : (
                    <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-ibm-success text-white">
                      <CheckCircle2 size={12} />
                    </div>
                  )}
                </div>
                <div className="mt-2 text-sm font-semibold text-ibm-ink">{photo.point}</div>
                <div className="truncate text-xs text-ibm-ink-muted">{photo.loc}</div>
              </div>
            ))}
            <button className="photo-thumb flex min-h-28 flex-col items-center justify-center border border-dashed border-ibm-ink bg-ibm-canvas p-3 text-center text-sm">
              <Camera size={18} className="mb-2 text-ibm-ink-muted" />
              <span className="font-semibold text-ibm-ink">Request photo</span>
              <span className="mt-1 text-xs text-ibm-ink-muted">Next 09:00 AM</span>
            </button>
          </div>
        </section>

        <section className="border border-ibm-hairline bg-ibm-canvas p-5">
          <h3 className="mb-5 text-lg font-semibold text-ibm-ink">Route progress</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ProgressStep icon={CheckCircle2} label="Accepted" time="07:45 AM" active />
            <ProgressStep icon={Truck} label="In transit" time={v.status === "On Route" ? "08:28 AM" : "--:--"} active={v.status === "On Route"} />
            <ProgressStep icon={Package} label="Out for delivery" time="--:--" />
            <ProgressStep icon={Flag} label="Delivered" time="--:--" />
          </div>
        </section>
      </div>
    </aside>
  );
}

function StatusLabel({ status }) {
  const onRoute = status === "On Route";
  return (
    <span className={`inline-flex min-h-7 items-center gap-2 px-3 text-sm ${onRoute ? "bg-[#defbe6] text-[#0e6027]" : "bg-[#fcf4d6] text-[#684e00]"}`}>
      <span className={`h-2 w-2 ${onRoute ? "bg-ibm-success" : "bg-ibm-warning"}`} />
      {status}
    </span>
  );
}

function CapacityState({ value }) {
  const label = value > 95 ? "Overload" : value > 85 ? "Near limit" : "Safe";
  const classes = value > 95 ? "bg-[#fff1f1] text-[#da1e28]" : value > 85 ? "bg-[#fcf4d6] text-[#684e00]" : "bg-[#defbe6] text-[#0e6027]";
  return <span className={`px-3 py-1.5 text-sm ${classes}`}>{label}</span>;
}

function MetricBar({ icon: Icon, label, value, percent, color }) {
  return (
    <div className="border border-ibm-hairline bg-ibm-canvas p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-ibm-surface-1 text-ibm-primary">
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm text-ibm-ink-muted">{label}</div>
          <div className="mt-1 text-base font-semibold text-ibm-ink">{value}</div>
          <div className="mt-3 h-1.5 bg-ibm-surface-2">
            <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RouteMetric({ icon: Icon, label, value, detail }) {
  return (
    <div className="border-b border-r border-ibm-hairline p-4 last:border-r-0 md:border-b-0">
      <Icon size={18} className="mb-2 text-ibm-primary" />
      <div className="text-sm text-ibm-ink-muted">{label}</div>
      <div className="mt-1 text-base font-semibold text-ibm-ink">{value}</div>
      {detail && <div className="mt-1 text-sm text-[#0e6027]">{detail}</div>}
    </div>
  );
}

function ProgressStep({ icon: Icon, label, time, active = false }) {
  return (
    <div className="border border-ibm-hairline bg-ibm-canvas p-4">
      <div className={`mb-3 flex h-9 w-9 items-center justify-center ${active ? "bg-ibm-primary text-white" : "bg-ibm-surface-1 text-ibm-ink-muted"}`}>
        <Icon size={16} />
      </div>
      <div className={`text-base font-semibold ${active ? "text-ibm-ink" : "text-ibm-ink-muted"}`}>{label}</div>
      <div className="mt-1 text-xs text-ibm-ink-muted">{time}</div>
    </div>
  );
}
