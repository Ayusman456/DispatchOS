export default function TruckSVG({ type, className = "" }) {
  if (type === "van") {
    return (
      <svg className={className} viewBox="0 0 200 100" fill="none">
        <path d="M10 70H0V25H10L30 10H120V70H100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M120 70V30H160L175 45V70H160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
        <circle cx="40" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
        <circle cx="40" cy="75" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="90" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
        <circle cx="90" cy="75" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="145" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
        <circle cx="145" cy="75" r="5" fill="currentColor" opacity="0.2"/>
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 240 100" fill="none">
      <path d="M20 70H0V30H20L40 10H140V70H120" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M140 70V20H200L220 40V70H200" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <circle cx="40" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
      <circle cx="40" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="100" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
      <circle cx="100" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="180" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
      <circle cx="180" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="210" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#18181b" opacity="0.5"/>
      <circle cx="210" cy="75" r="6" fill="currentColor" opacity="0.2"/>
    </svg>
  );
}
