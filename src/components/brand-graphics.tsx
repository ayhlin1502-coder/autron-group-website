type SvgProps = { className?: string };

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export function CapabilityIcon({ index, className = "" }: { index: number; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...strokeProps} strokeWidth="1.75">
      {index === 0 && <><circle cx="32" cy="32" r="20" /><path d="M12 32H52M32 12C24 20 24 44 32 52M32 12C40 20 40 44 32 52" /><path d="M17 22H47M17 42H47" /></>}
      {index === 1 && <><rect x="14" y="14" width="36" height="36" rx="6" /><path d="M22 38L29 30L35 36L42 26" /><circle cx="22" cy="22" r="3" /></>}
      {index === 2 && <><circle cx="32" cy="15" r="6" /><circle cx="15" cy="47" r="6" /><circle cx="49" cy="47" r="6" /><path d="M28 20.5L18.5 41.5M36 20.5L45.5 41.5M21 47H43" /></>}
      {index === 3 && <><path d="M10 24H36V42H10V24Z" /><path d="M36 30H46L52 37V42H36V30Z" /><circle cx="19" cy="46" r="4" /><circle cx="45" cy="46" r="4" /><path d="M10 42H15M49 42H52" /></>}
      {index === 4 && <><path d="M9 46L24 31L33 40L55 18" /><path d="M42 18H55V31" /></>}
    </svg>
  );
}

export function StatIcon({ index, className = "" }: { index: number; className?: string }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="19" cy="12" r="2" fill="currentColor" />
        <path d="M7 12h3M14 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s6-5.7 6-10.5A6 6 0 0 0 12 4.5a6 6 0 0 0-6 6A13.6 13.6 0 0 0 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10.5" r="2.25" fill="currentColor" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 8.3h17M3.5 15.7h17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 8.5c1.2-1.3 3-2 4.8-2 2.7 0 4.7 1.8 4.7 4.3 0 2.2-1.9 3.6-4.4 4.4-2.1.7-4.4 1.2-4.4 3.2 0 1.8 1.8 2.9 4.1 2.9 1.9 0 3.5-.8 4.5-2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 15.5c-1.2 1.3-3 2-4.8 2-2.7 0-4.7-1.8-4.7-4.3 0-2.2 1.9-3.6 4.4-4.4 2.1-.7 4.4-1.2 4.4-3.2 0-1.8-1.8-2.9-4.1-2.9-1.9 0-3.5.8-4.5 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: SvgProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth="2">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function BoxIcon({ className = "" }: SvgProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth="1.6">
      <path d="M3 8l9-5 9 5-9 5-9-5Z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  );
}

export function ShipIcon({ className = "" }: SvgProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth="1.6">
      <path d="M3 16l2 4h14l2-4H3Z" />
      <path d="M6 16V9h3V6h6v3h3v7" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function FlagIcon({ code, className = "" }: { code: string; className?: string }) {
  const props = { className, viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice" };

  if (code === "AU") {
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#00247D" />
        <rect width="12" height="8" fill="#00247D" />
        <path d="M0 0L12 8M12 0L0 8" stroke="#fff" strokeWidth="1.6" />
        <path d="M0 0L5.2 3.5M12 0L6.8 3.5M0 8L5.2 4.5M12 8L6.8 4.5" stroke="#C8102E" strokeWidth="0.8" />
        <rect x="5" width="2" height="8" fill="#fff" />
        <rect y="3" width="12" height="2" fill="#fff" />
        <rect x="5.4" width="1.2" height="8" fill="#C8102E" />
        <rect y="3.4" width="12" height="1.2" fill="#C8102E" />
        <g fill="#fff">
          <circle cx="18" cy="4" r="0.8" />
          <circle cx="20.6" cy="6.8" r="0.8" />
          <circle cx="17.6" cy="10.2" r="0.8" />
          <circle cx="20.2" cy="12.6" r="0.8" />
          <circle cx="16.2" cy="13.2" r="0.6" />
        </g>
      </svg>
    );
  }

  if (code === "TW") {
    const rays = Array.from({ length: 12 }, (_, i) => i * 30);
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#FE0000" />
        <rect width="12" height="8" fill="#000095" />
        <g fill="#fff">
          {rays.map((deg) => (
            <polygon key={deg} points="6,1.15 6.45,2.75 5.55,2.75" transform={`rotate(${deg} 6 4)`} />
          ))}
          <circle cx="6" cy="4" r="1.1" />
        </g>
      </svg>
    );
  }

  if (code === "CN") {
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#DE2910" />
        <g fill="#FFDE00">
          <path d="M5 2L5.6 3.8H7.5L6 4.9L6.6 6.7L5 5.6L3.4 6.7L4 4.9L2.5 3.8H4.4Z" />
          <circle cx="9" cy="1.5" r="0.5" />
          <circle cx="10.2" cy="3.2" r="0.5" />
          <circle cx="10.2" cy="5.4" r="0.5" />
          <circle cx="9" cy="7" r="0.5" />
        </g>
      </svg>
    );
  }

  if (code === "US") {
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#B22234" />
        <rect y="1.23" width="24" height="1.23" fill="#fff" />
        <rect y="3.69" width="24" height="1.23" fill="#fff" />
        <rect y="6.15" width="24" height="1.23" fill="#fff" />
        <rect y="8.61" width="24" height="1.23" fill="#fff" />
        <rect y="11.07" width="24" height="1.23" fill="#fff" />
        <rect y="13.53" width="24" height="1.23" fill="#fff" />
        <rect width="10.4" height="8.6" fill="#3C3B6E" />
      </svg>
    );
  }

  if (code === "EU") {
    const stars = Array.from({ length: 12 }, (_, i) => i * 30);
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#003399" />
        <g fill="#FFCC00">
          {stars.map((deg) => (
            <circle key={deg} r="0.5" cx={12 + 5 * Math.cos((deg * Math.PI) / 180)} cy={8 + 5 * Math.sin((deg * Math.PI) / 180)} />
          ))}
        </g>
      </svg>
    );
  }

  if (code === "JP") {
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#fff" />
        <circle cx="12" cy="8" r="4.6" fill="#BC002D" />
      </svg>
    );
  }

  if (code === "VN") {
    return (
      <svg {...props}>
        <rect width="24" height="16" fill="#DA251D" />
        <path d="M12 3L13.3 6.9H17.4L14.1 9.1L15.3 13L12 10.7L8.7 13L9.9 9.1L6.6 6.9H10.7Z" fill="#FFFF00" />
      </svg>
    );
  }

  return null;
}
