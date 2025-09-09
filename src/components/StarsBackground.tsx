import React, { useMemo } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: number;
  drift: number;
  delay: number;
  driftDelay: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StarsBackground: React.FC<{ count?: number }> = ({ count = 150 }) => {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3,
        opacity: rand(0.3, 0.9),
        twinkle: rand(1.5, 4.5),
        drift: rand(6, 12),
        delay: rand(0, 5),
        driftDelay: rand(0, 6),
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            filter: s.size >= 2 ? "drop-shadow(0 0 6px rgba(255,255,255,0.6))" : undefined,
            animation: `star-twinkle ${s.twinkle}s ease-in-out ${s.delay}s infinite, star-drift ${s.drift}s ease-in-out ${s.driftDelay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
