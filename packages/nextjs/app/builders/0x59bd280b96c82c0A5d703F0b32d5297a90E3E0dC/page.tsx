"use client";

import { useEffect, useState } from "react";
import { Press_Start_2P } from "next/font/google";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { SwitchTheme } from "~~/components/SwitchTheme";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Eddy: NextPage = () => {
  const { resolvedTheme } = useTheme();
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

  // Generate falling stars/snow when mounted or theme changes
  useEffect(() => {
    if (mounted) {
      const items = Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 10,
        animationDelay: Math.random() * 4, // Stagger start times
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
  }, [mounted, resolvedTheme]);

  const isDarkMode = resolvedTheme === "dark";

  // Theme-specific colors
  const bgGradient = isDarkMode
    ? "bg-[radial-gradient(circle_at_top,_#161616,_#010101_70%)]"
    : "bg-[radial-gradient(circle_at_top,_#e0f2fe,_#bae6fd_70%)]";

  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const borderColor = isDarkMode ? "border-white" : "border-blue-600";
  const glowColor = isDarkMode ? "shadow-[0_0_38px_rgba(57,255,20,0.35)]" : "shadow-[0_0_38px_rgba(37,99,235,0.35)]";
  const bgOpacity = isDarkMode ? "bg-black/85" : "bg-white/80";

  if (!mounted) return null;

  return (
    <main
      className={`relative flex min-h-screen items-center justify-center overflow-hidden ${bgGradient} px-4 ${textColor}`}
    >
      {/* Theme Toggle - Fixed position */}
      <div className="fixed right-4 top-4 z-20 sm:right-8 sm:top-8">
        <SwitchTheme />
      </div>

      {/* Falling stars (dark mode) / Snowflakes (light mode) */}
      <div className="pointer-events-none absolute inset-0">
        {fallingItems.map(item => (
          <div
            key={item.id}
            className={`absolute animate-fall ${isDarkMode ? "text-white" : "text-white"}`}
            style={{
              left: `${item.left}%`,
              top: "-20px",
              animationDuration: `${item.animationDuration}s`,
              animationDelay: `${item.animationDelay}s`,
              fontSize: item.size === "lg" ? "18px" : "14px",
              opacity: isDarkMode ? 0.7 : 0.8,
            }}
          >
            {isDarkMode ? (item.symbol === "ufo" ? "🛸" : item.symbol === "moon" ? "☾" : "✦") : "❄"}
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

      <section
        className={`relative z-10 flex w-full flex-col ${borderColor} ${bgOpacity} ${glowColor} border-2 border-dashed px-4 py-6 sm:h-[60vh] sm:w-[90vw] sm:px-6 sm:py-8 md:w-[70vw] lg:w-[50vw] lg:max-w-3xl lg:px-8 ${pressStart.className}`}
      >
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col items-center justify-between px-2 py-4 sm:px-4 lg:px-6">
            <h1 className="text-center text-sm tracking-[0.4em] sm:text-lg sm:tracking-[0.6em] lg:text-xl lg:tracking-[0.8em]">
              ** Eddy Lim **
            </h1>

            <div className="text-center text-[8px] uppercase text-opacity-80 sm:text-[9px]">
              <p className="mb-2">{`// Bio //`}</p>
              <p className="normal-case leading-relaxed opacity-80">
                Juz graduated from my CS degree and now diving deep into the Web3 rabbit hole...
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 text-[8px] opacity-85 sm:gap-6 md:grid-cols-2">
              <div className="py-2 text-center uppercase">
                <p className="mb-3 text-[9px] sm:mb-4 sm:text-[10px]">[ Socials ]</p>
                <ul className="space-y-2 text-[8px] normal-case tracking-normal sm:space-y-3 sm:text-[9px]">
                  <li>
                    <a
                      href="https://github.com/Eddy3129"
                      className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                    >
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/Eddy3129"
                      className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                    >
                      Telegram ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/eddyy_eth"
                      className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                    >
                      X (Twitter) ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eddy-limfy/"
                      className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                </ul>
              </div>

              <div className="py-2 text-center uppercase">
                <p className="mb-3 text-[9px] sm:mb-4 sm:text-[10px]">[ Experience ]</p>
                <div className="space-y-3 text-[8px] normal-case tracking-normal opacity-80 sm:space-y-4 sm:text-[9px]">
                  <p>
                    <span>
                      Co-Founder ·{" "}
                      <a
                        href="https://givehope-x8qk.onrender.com/"
                        className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                      >
                        Give Protocol ↗
                      </a>
                    </span>
                    <br />
                    <span className="mt-1 inline-block">Sep 2025 — Present</span>
                  </p>
                  <p>
                    <span>
                      Software Engineer (Intern) ·{" "}
                      <a
                        href="https://hata.io/"
                        className={`transition-colors ${isDarkMode ? "hover:text-[#39ff14]" : "hover:text-blue-600"}`}
                      >
                        Hata Technologies ↗
                      </a>
                    </span>
                    <br />
                    <span className="mt-1 inline-block">Jan — Mar 2025</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eddy;
