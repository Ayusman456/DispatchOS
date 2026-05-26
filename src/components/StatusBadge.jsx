export default function StatusBadge({ status, color }) {
  const map = {
    emerald: { bg: "bg-[#defbe6]", text: "text-[#0e6027]", dot: "bg-ibm-success" },
    amber:   { bg: "bg-[#fcf4d6]", text: "text-[#684e00]", dot: "bg-ibm-warning" },
  };
  const s = map[color] || map.emerald;
  return (
    <span className={`status-badge inline-flex min-h-7 items-center gap-2 px-3 ${s.bg} ${s.text}`}>
      <span className={`h-2 w-2 ${s.dot}`} />
      {status}
    </span>
  );
}
