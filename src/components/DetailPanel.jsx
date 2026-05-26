import { useState } from "react";
import { Phone, MessageSquare, Edit3, Plus, Minus, Maximize, Navigation, Layers, Camera, Package, CheckCircle2 } from "lucide-react";
import { vehicles } from "../data/vehicles";
import StatusBadge from "./StatusBadge";
import TruckSVG from "./TruckSVG";

export default function DetailPanel({ vehicleId }) {
  const [activeTab, setActiveTab] = useState("Shipping Info");
  const v = vehicles.find(x => x.id === vehicleId);
  if (!v) return null;

  const tabs = ["Shipping Info", "Vehicle Info", "Documents", "Company", "Billing"];

  return (
    <aside className="w-[480px] bg-[#0c0c0e] border-l border-zinc-800 overflow-y-auto shrink-0 detail-panel">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-white">{v.id}</h2>
            <StatusBadge status={v.status} color={v.statusColor} />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-medium flex items-center gap-2 hover:bg-zinc-700 transition">
              <Phone size={14} /> Call Driver
            </button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium flex items-center gap-2 hover:bg-blue-500 transition">
              <MessageSquare size={14} /> Chat with Driver
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 border-b border-zinc-800">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`tab-btn pb-3 ${activeTab === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Capacity */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">Current Truck Capacity</h3>
          <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-6 overflow-hidden">
            <TruckSVG type={v.type} className="w-full h-32 text-zinc-600" />
            <div className="absolute inset-y-6 left-[15%] right-[15%] rounded-lg overflow-hidden pointer-events-none">
              <div className="h-full bg-blue-500/20 capacity-fill" style={{ width: `${v.capacity}%` }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white drop-shadow-lg">{v.capacity}%</span>
            </div>
          </div>
        </div>

        {/* Route Map */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white">Route</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-mono">{v.routeTime}</span>
              <span className="text-xs text-zinc-500">{v.routeDist}</span>
              <button className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-700 transition">
                <Edit3 size={12} /> Change Route
              </button>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 h-64 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <path d="M 80 200 Q 150 180 180 140 T 220 100 T 280 60" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <path d="M 80 200 Q 150 180 180 140 T 220 100 T 280 60" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" opacity="0.1" />
              <circle cx="80" cy="200" r="5" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.6))" }} />
              <circle cx="180" cy="140" r="4" fill="#52525b" />
              <circle cx="220" cy="100" r="4" fill="#52525b" />
              <circle cx="280" cy="60" r="6" fill="#3b82f6" className="route-pulse" style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.6))" }} />
              <text x="290" y="55" fill="#a1a1aa" fontSize="10" fontFamily="Inter">New York</text>
              <text x="60" y="220" fill="#a1a1aa" fontSize="10" fontFamily="Inter">Jersey City</text>
            </svg>
            <div className="absolute right-3 bottom-3 flex flex-col gap-1">
              <button className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white"><Plus size={12} /></button>
              <button className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white"><Minus size={12} /></button>
            </div>
            <div className="absolute right-3 top-3 flex flex-col gap-1">
              <button className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white"><Maximize size={12} /></button>
              <button className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white"><Navigation size={12} /></button>
              <button className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white"><Layers size={12} /></button>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">Cargo Photo Reports</h3>
          <div className="grid grid-cols-4 gap-3">
            {v.photos.map((p, i) => (
              <div key={i} className="photo-thumb aspect-square rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden cursor-pointer relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package size={24} className="text-zinc-600 group-hover:text-blue-400 transition" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[9px] text-zinc-400 leading-tight">Point {p.point}</p>
                  <p className="text-[9px] text-zinc-500 leading-tight">{p.loc}</p>
                  <p className="text-[9px] text-zinc-600 leading-tight">{p.time}</p>
                </div>
              </div>
            ))}
            {v.photos.length < 4 && (
              <button className="aspect-square rounded-lg border border-dashed border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center gap-1.5 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 transition">
                <Camera size={20} />
                <span className="text-[10px]">Request Photo</span>
              </button>
            )}
          </div>
        </div>

        {/* Requests */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">Route Requests</h3>
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>No pending route requests</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
