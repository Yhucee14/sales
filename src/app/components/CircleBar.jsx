const CircleBar = ({ size = 110, strokeWidth = 10, percent = 85, strokeColor = "#22c55e" }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <svg
      viewBox="0 0 110 110"
      width={size}
      height={size}
      className="circlebar-svg"
    >
      {/* Rail */}
      <path
        d={`M 55,55 m 0,50
          a 50,50 0 1 1 0,-100
          a 50,50 0 1 1 0,100`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        className="circlebar-rail-path"
        stroke="#e5e7eb" // Tailwind gray-200
        style={{
          strokeDasharray: `${dashArray}px, 800px`,
          strokeDashoffset: 0
        }}
      />
      {/* Inner Progress */}
      <path
        d={`M 55,55 m 0,50
          a 50,50 0 1 1 0,-100
          a 50,50 0 1 1 0,100`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        stroke={strokeColor}
        style={{
          strokeDasharray: `${dashArray}px, 800px`,
          strokeDashoffset: dashOffset,
          transition: "stroke-dasharray 0.3s ease-out"
        }}
      />
    </svg>
  );
};

export default CircleBar;