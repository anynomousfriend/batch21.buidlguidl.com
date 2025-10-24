import { Press_Start_2P } from "next/font/google";
import { FallingAnimation } from "./FallingAnimation";
import type { NextPage } from "next";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const SOCIAL_LINKS = [
  { href: "https://github.com/Eddy3129", text: "GitHub ↗" },
  { href: "https://t.me/Eddy3129", text: "Telegram ↗" },
  { href: "https://x.com/eddyy_eth", text: "X (Twitter) ↗" },
  { href: "https://www.linkedin.com/in/eddy-limfy/", text: "LinkedIn ↗" },
];

const EXPERIENCE = [
  {
    role: "Co-Founder",
    company: "Give Protocol",
    href: "https://givehope-x8qk.onrender.com/",
    period: "Sep 2025 — Present",
  },
  {
    role: "Software Engineer (Intern)",
    company: "Hata Technologies",
    href: "https://hata.io/",
    period: "Jan — Mar 2025",
  },
];

const Eddy: NextPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#e0f2fe,_#bae6fd_70%)] px-4 text-gray-900 dark:bg-[radial-gradient(circle_at_top,_#161616,_#010101_70%)] dark:text-white">
      <FallingAnimation />

      <section
        className={`relative z-10 -mt-[10vh] flex w-full flex-col border-2 border-dashed border-blue-600 bg-white/80 px-4 py-6 shadow-[0_0_38px_rgba(37,99,235,0.35)] dark:border-white dark:bg-black/85 dark:shadow-[0_0_38px_rgba(57,255,20,0.35)] sm:h-[60vh] sm:w-[90vw] sm:px-6 sm:py-8 md:w-[70vw] lg:w-[50vw] lg:max-w-3xl lg:px-8 ${pressStart.className}`}
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
                  {SOCIAL_LINKS.map(link => (
                    <li key={link.href}>
                      <a href={link.href} className="transition-colors hover:text-blue-600 dark:hover:text-[#39ff14]">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-2 text-center uppercase">
                <p className="mb-3 text-[9px] sm:mb-4 sm:text-[10px]">[ Experience ]</p>
                <div className="space-y-3 text-[8px] normal-case tracking-normal opacity-80 sm:space-y-4 sm:text-[9px]">
                  {EXPERIENCE.map(exp => (
                    <p key={exp.href}>
                      <span>
                        {exp.role} ·{" "}
                        <a href={exp.href} className="transition-colors hover:text-blue-600 dark:hover:text-[#39ff14]">
                          {exp.company} ↗
                        </a>
                      </span>
                      <br />
                      <span className="mt-1 inline-block">{exp.period}</span>
                    </p>
                  ))}
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
