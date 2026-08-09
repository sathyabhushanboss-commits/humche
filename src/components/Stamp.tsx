export default function Stamp({
  size = 128,
  tone = "forest",
}: {
  size?: number;
  tone?: "forest" | "cream";
}) {
  const ring = tone === "forest" ? "#1B5E20" : "#F5EBD7";
  const bg = tone === "forest" ? "none" : "none";
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="stamp"
        style={{ background: bg }}
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke={ring}
          strokeWidth="1"
          strokeDasharray="1 5"
        />
        <path
          id="stampCircle"
          d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          fill="none"
        />
        <text fill={ring} fontSize="12.6" letterSpacing="3.4">
          <textPath href="#stampCircle" startOffset="0%">
            HAMCHE CULTURE • WAY BACK TO REAL LIFE • EST. SIDDI HERITAGE •
          </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="absolute inset-0"
      >
        <path
          d="M100 74c-14 10-22 22-22 34a22 22 0 0044 0c0-12-8-24-22-34z"
          fill="none"
          stroke={ring}
          strokeWidth="2.2"
        />
        <path
          d="M100 84v40M100 96l-9 9M100 108l9 9"
          stroke={ring}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
