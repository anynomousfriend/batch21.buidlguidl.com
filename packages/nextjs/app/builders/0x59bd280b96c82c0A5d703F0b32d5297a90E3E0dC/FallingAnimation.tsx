"use client";

import { useEffect, useState } from "react";

export const FallingAnimation = () => {
  const [mounted, setMounted] = useState(false);
  const [fallingItems, setFallingItems] = useState<
    Array<{
      id: number;
      left: number;
      animationDuration: number;
      animationDelay: number;
      size: string;
      symbol: string;
    }>
  >([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate falling stars/snow when mounted
  useEffect(() => {
    if (mounted) {
      const items = Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 10,
        animationDelay: Math.random() * 4,
        size: Math.random() > 0.7 ? "sm" : "xs",
        symbol: (() => {
          const rand = Math.random();
          if (rand > 0.92) return "ufo"; // 8% UFOs
          if (rand > 0.8) return "moon"; // 12% moons
          return "star"; // 80% stars
        })(),
      }));
      setFallingItems(items);
    }
  }, [mounted]);

  if (!mounted) return null;

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
