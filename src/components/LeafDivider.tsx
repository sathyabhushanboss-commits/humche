export default function LeafDivider({
  flip = false,
  from = "#F5EBD7",
  to = "#1B5E20",
}: {
  flip?: boolean;
  from?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="w-full leading-none"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[70px] md:h-[110px] block"
      >
        <path
          d="M0,32 C180,80 320,4 500,40 C660,72 760,18 960,44 C1140,68 1260,20 1440,48 L1440,120 L0,120 Z"
          fill={to}
        />
        <path
          d="M0,32 C180,80 320,4 500,40 C660,72 760,18 960,44 C1140,68 1260,20 1440,48"
          fill="none"
          stroke={from}
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
