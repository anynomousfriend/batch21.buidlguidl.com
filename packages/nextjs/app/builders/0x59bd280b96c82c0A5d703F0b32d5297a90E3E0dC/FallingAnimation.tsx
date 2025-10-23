"use client";

import { useMemo } from "react";

// Pseudo-random number generator for deterministic values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const FallingAnimation = () => {
  const fallingItems = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: seededRandom(i * 12.9898 + 78.233) * 100,
        animationDuration: 8 + seededRandom(i * 43.758 + 94.673) * 10,
        animationDelay: seededRandom(i * 67.891 + 23.456) * 4,
        size: seededRandom(i * 34.567 + 56.789) > 0.7 ? "sm" : "xs",
        symbol: (() => {
          const rand = seededRandom(i * 89.012 + 34.567);
          if (rand > 0.92) return "ufo"; // 8% UFOs
          if (rand > 0.8) return "moon"; // 12% moons
          return "star"; // 80% stars
        })(),
      })),
    [],
  );

  return (
    <>
      {/* Falling stars (dark mode) / Snowflakes (light mode) */}
      <div className="pointer-events-none absolute inset-0">
        {fallingItems.map(item => (
          <div
            key={item.id}
            className="absolute animate-fall text-white"
            style={{
              left: `${item.left}%`,
              top: "-20px",
              animationDuration: `${item.animationDuration}s`,
              animationDelay: `${item.animationDelay}s`,
              fontSize: item.size === "lg" ? "18px" : "14px",
              opacity: 0.7,
            }}
          >
            <span className="dark:inline hidden">
              {item.symbol === "ufo" ? "🛸" : item.symbol === "moon" ? "☾" : "✦"}
            </span>
            <span className="dark:hidden inline">❄</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </>
  );
};
