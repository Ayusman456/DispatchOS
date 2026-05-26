import { LayoutGrid, MessageSquare, Users, Route, Bell, Settings, UserCircle, FileSpreadsheet, Plus, Truck, Package, Wrench, User, FileText, BarChart3, Clock } from "lucide-react";

export default function Sidebar({ activePage, onNavigate }) {
  const navClass = (page) => `sidebar-link ${activePage === page ? "active" : ""}`;

  return (
    <aside className="border-b border-ibm-hairline bg-ibm-canvas lg:flex lg:h-screen lg:w-60 lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r">
      <div className="border-b border-ibm-hairline p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center bg-ibm-ink text-ibm-inverse-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold leading-tight text-ibm-ink">Right Direction</h1>
            <p className="text-xs text-ibm-ink-muted">Since 2022</p>
          </div>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 py-2 lg:flex-1 lg:flex-col lg:overflow-y-auto lg:px-0 lg:py-4">
        <button type="button" onClick={() => onNavigate("dashboard")} className={navClass("dashboard")}><LayoutGrid size={18}/><span>Dashboard</span></button>
        <button type="button" className="sidebar-link">
          <MessageSquare size={18}/><span>Chats</span>
          <span className="ml-auto bg-ibm-primary px-1.5 py-0.5 text-xs font-medium text-white">5</span>
        </button>
        <button type="button" className="sidebar-link"><Users size={18}/><span>Partners</span></button>
        <button type="button" onClick={() => onNavigate("tracking")} className={navClass("tracking")}><Route size={18}/><span>Tracking</span></button>

        <div className="hidden pt-2 lg:block">
          <div className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-ibm-ink-muted">
            <span>Requests</span>
            <span className="ml-auto bg-ibm-surface-2 px-1.5 py-0.5 text-xs text-ibm-ink">3</span>
          </div>
          <div className="ml-4 mt-1 border-l border-ibm-hairline pl-3">
            <button type="button" className="sidebar-link text-sm py-2"><Truck size={16}/><span>Trucks</span></button>
            <button type="button" className="sidebar-link text-sm py-2">
              <Package size={16}/><span>Cargos</span>
              <span className="ml-auto bg-ibm-primary px-1.5 py-0.5 text-xs text-white">2</span>
            </button>
            <button type="button" className="sidebar-link text-sm py-2"><Wrench size={16}/><span>Repair</span></button>
            <button type="button" className="sidebar-link text-sm py-2"><User size={16}/><span>Drivers</span></button>
            <button type="button" className="sidebar-link text-sm py-2">
              <FileText size={16}/><span>Reports</span>
              <span className="ml-auto bg-ibm-warning px-1.5 py-0.5 text-xs text-ibm-ink">1</span>
            </button>
          </div>
        </div>

        <button type="button" className="sidebar-link"><BarChart3 size={18}/><span>Analysis</span></button>
        <button type="button" className="sidebar-link"><Clock size={18}/><span>History</span></button>
      </nav>

      <div className="hidden border-t border-ibm-hairline p-4 lg:block">
        <div className="flex items-center gap-2">
          {[Settings, Bell, UserCircle, FileSpreadsheet].map((Icon,i)=>(
            <button key={i} className="flex h-10 w-10 items-center justify-center bg-ibm-surface-1 text-ibm-ink-muted transition hover:bg-ibm-surface-2 hover:text-ibm-ink"><Icon size={16}/></button>
          ))}
        </div>
        <button className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 border border-dashed border-ibm-ink bg-ibm-canvas px-4 text-sm font-medium text-ibm-ink transition hover:bg-ibm-surface-1">
          <div className="flex h-6 w-6 items-center justify-center bg-ibm-primary"><Plus size={14} className="text-white"/></div>
          Create new Request
        </button>
      </div>
    </aside>
  );
}
