export default function StatusBadge({ status, color }) {
  const map = {
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-500" },
    amber:   { bg: "bg-amber-500/10",  text: "text-amber-400",  dot: "bg-amber-500" },
  };
  const s = map[color] || map.emerald;
  const pulse = color === "emerald" ? "route-pulse" : "";
  return (
    <span className={`status-badge px-2 py-1 rounded-full ${s.bg} ${s.text} flex items-center gap-1.5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${pulse}`} />
      {status}
    </span>
  );
}
