"use client";

import { Press_Start_2P } from "next/font/google";
import type { NextPage } from "next";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

// Generate static stars once for a subtle animated feel without re-render cost
const stars = Array.from({ length: 150 }, (_, i) => ({
  id: i,
  left: (i * 7919) % 100,
  top: (i * 6421) % 100,
  size: i % 5 === 0 ? (i % 2 === 0 ? "%" : "*") : ".",
  opacity: 0.3 + ((i * 37) % 70) / 100,
}));

const Eddy: NextPage = () => {
  return (
    <main className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#161616,_#010101_70%)] pt-20 text-white">
      {/* Starry background */}
      <div className="pointer-events-none absolute inset-0">
        {stars.map(star => (
          <span
            key={star.id}
            className="absolute font-mono text-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
              fontSize: star.size === "." ? "8px" : "12px",
            }}
          >
            {star.size}
          </span>
        ))}
      </div>

      <section
        className={`relative z-10 flex h-[60vh] w-[50vw] max-w-3xl flex-col border-2 border-dashed border-white bg-black/85 px-8 py-8 shadow-[0_0_38px_rgba(57,255,20,0.35)] ${pressStart.className}`}
      >
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col items-center justify-between px-6 py-4">
            <h1 className="text-center text-xl tracking-[0.8em] text-white md:text-xl">** Eddy Lim **</h1>

            <div className="text-center text-[9px] uppercase text-white/80">
              <p className="mb-2">{`// Bio //`}</p>
              <p className="normal-case leading-relaxed text-white/80">
                Juz graduated from my CS degree and now diving deep into the Web3 rabbit hole...
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 text-[8px] text-white/85 md:grid-cols-2">
              <div className="py-2 text-center uppercase">
                <p className="mb-4 text-[10px] text-white">[ Socials ]</p>
                <ul className="space-y-3 text-[9px] normal-case tracking-normal">
                  <li>
                    <a href="https://github.com/Eddy3129" className="transition-colors hover:text-[#39ff14]">
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Eddy3129" className="transition-colors hover:text-[#39ff14]">
                      Telegram ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/eddyy_eth" className="transition-colors hover:text-[#39ff14]">
                      X (Twitter) ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eddy-limfy/"
                      className="transition-colors hover:text-[#39ff14]"
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                </ul>
              </div>

              <div className="py-2 text-center uppercase">
                <p className="mb-4 text-[10px] text-white">[ Experience ]</p>
                <div className="space-y-4 text-[9px] normal-case tracking-normal text-white/80">
                  <p>
                    <span className="text-white">
                      Co-Founder ·{" "}
                      <a href="https://givehope-x8qk.onrender.com/" className="transition-colors hover:text-[#39ff14]">
                        Give Protocol
                      </a>
                    </span>
                    <br />
                    <span className="mt-1 inline-block">Sep 2025 — Present</span>
                  </p>
                  <p>
                    <span className="text-white">
                      Software Engineer (Intern) ·{" "}
                      <a href="https://hata.io/" className="transition-colors hover:text-[#39ff14]">
                        Hata Technologies
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
