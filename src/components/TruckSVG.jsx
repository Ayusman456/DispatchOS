import { useId } from "react";

export default function TruckSVG({ type, capacity, className = "" }) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const showCapacity = typeof capacity === "number" && capacity >= 0;

  if (type === "van") {
    return (
      <svg className={className} viewBox="0 0 200 100" fill="none">
        <defs>
          <clipPath id={id}>
            <path d="M10 70H0V25H10L30 10H120V70Z" />
          </clipPath>
          <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f62fe" />
            <stop offset="100%" stopColor="#0f62fe" />
          </linearGradient>
        </defs>

        {showCapacity && (
          <g>
            <rect
              x="0"
              y="10"
              width={120 * (capacity / 100)}
              height="60"
              fill={`url(#${id}-grad)`}
              clipPath={`url(#${id})`}
            />
            <text x={60} y={42} textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="600" fontFamily="IBM Plex Sans, Helvetica Neue, Arial, sans-serif">
              {capacity}%
            </text>
            <text x={60} y={54} textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="400" opacity="0.9" fontFamily="IBM Plex Sans, Helvetica Neue, Arial, sans-serif">
              Capacity Used
            </text>
          </g>
        )}

        <path d="M10 70H0V25H10L30 10H120V70H100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M120 70V30H160L175 45V70H160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
        <circle cx="40" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
        <circle cx="40" cy="75" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="90" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
        <circle cx="90" cy="75" r="5" fill="currentColor" opacity="0.2"/>
        <circle cx="145" cy="75" r="10" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
        <circle cx="145" cy="75" r="5" fill="currentColor" opacity="0.2"/>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 240 100" fill="none">
      <defs>
        <clipPath id={id}>
          <path d="M20 70H0V30H20L40 10H140V70Z" />
        </clipPath>
          <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f62fe" />
          <stop offset="100%" stopColor="#0f62fe" />
        </linearGradient>
      </defs>

      {showCapacity && (
        <g>
          <rect
            x="0"
            y="10"
            width={140 * (capacity / 100)}
            height="60"
            fill={`url(#${id}-grad)`}
            clipPath={`url(#${id})`}
          />
          <text x={70} y={42} textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="600" fontFamily="IBM Plex Sans, Helvetica Neue, Arial, sans-serif">
            {capacity}%
          </text>
          <text x={70} y={54} textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="400" opacity="0.9" fontFamily="IBM Plex Sans, Helvetica Neue, Arial, sans-serif">
            Capacity Used
          </text>
        </g>
      )}

      <path d="M20 70H0V30H20L40 10H140V70H120" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M140 70V20H200L220 40V70H200" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <circle cx="40" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
      <circle cx="40" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="100" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
      <circle cx="100" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="180" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
      <circle cx="180" cy="75" r="6" fill="currentColor" opacity="0.2"/>
      <circle cx="210" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="#f4f4f4" opacity="0.8"/>
      <circle cx="210" cy="75" r="6" fill="currentColor" opacity="0.2"/>
    </svg>
  );
}
