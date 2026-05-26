import { LayoutGrid, MessageSquare, Users, Route, Bell, Settings, UserCircle, FileSpreadsheet, Plus, Truck, Package, Wrench, User, FileText, BarChart3, Clock } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0c0c0e] border-r border-zinc-800 flex flex-col shrink-0">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <h1 className="font-semibold text-sm text-white leading-tight">Right Direction</h1>
            <p className="text-[10px] text-zinc-500">Since 2022</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <a href="#" className="sidebar-link"><LayoutGrid size={18}/><span>Dashboard</span></a>
        <a href="#" className="sidebar-link">
          <MessageSquare size={18}/><span>Chats</span>
          <span className="ml-auto bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">5</span>
        </a>
        <a href="#" className="sidebar-link"><Users size={18}/><span>Partners</span></a>
        <a href="#" className="sidebar-link active"><Route size={18}/><span>Tracking</span></a>

        <div className="pt-2">
          <div className="flex items-center gap-3 px-3 py-2 text-zinc-500 text-xs font-medium uppercase tracking-wider">
            <span>Requests</span>
            <span className="ml-auto bg-zinc-800 text-zinc-300 text-[10px] px-1.5 py-0.5 rounded-full">3</span>
          </div>
          <div className="ml-4 border-l border-zinc-800 pl-3 space-y-1 mt-1">
            <a href="#" className="sidebar-link text-sm py-2"><Truck size={16}/><span>Trucks</span></a>
            <a href="#" className="sidebar-link text-sm py-2">
              <Package size={16}/><span>Cargos</span>
              <span className="ml-auto bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
            </a>
            <a href="#" className="sidebar-link text-sm py-2"><Wrench size={16}/><span>Repair</span></a>
            <a href="#" className="sidebar-link text-sm py-2"><User size={16}/><span>Drivers</span></a>
            <a href="#" className="sidebar-link text-sm py-2">
              <FileText size={16}/><span>Reports</span>
              <span className="ml-auto bg-amber-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">1</span>
            </a>
          </div>
        </div>

        <a href="#" className="sidebar-link"><BarChart3 size={18}/><span>Analysis</span></a>
        <a href="#" className="sidebar-link"><Clock size={18}/><span>History</span></a>
      </nav>

      <div className="p-4 border-t border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          {[Settings, Bell, UserCircle, FileSpreadsheet].map((Icon,i)=>(
            <button key={i} className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition"><Icon size={16}/></button>
          ))}
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-dashed border-zinc-700 text-zinc-300 py-3 rounded-xl transition text-sm font-medium">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"><Plus size={14} className="text-white"/></div>
          Create new Request
        </button>
      </div>
    </aside>
  );
}
