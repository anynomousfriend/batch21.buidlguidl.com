import Image from "next/image";
import { DiscordIconSVG, GitHubIconSVG, XIconSVG } from "./SocialIcons";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Nidhi's Profile — Batch #21",
  description: "Builder page for Batch #21",
};

const ADDRESS = "0x2Ef6340900ADbeaECC065777bdd193feF0e5D2E7";

// List of socials
const socials = [
  {
    name: "Discord",
    href: "http://discord.com/users/1065312151557914704",
    svg: <DiscordIconSVG />,
  },
  {
    name: "GitHub",
    href: "https://github.com/nidhi2026",
    svg: <GitHubIconSVG />,
  },
  {
    name: "X",
    href: "https://x.com/nidhi_youmi",
    svg: <XIconSVG />,
  },
];

const NidhiBuilderPage: NextPage = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3] dark:from-[#0a0a0a] dark:to-[#1b1b1b] text-gray-800 dark:text-gray-200 font-mono overflow-hidden p-6">
      {/* Card */}
      <div className="relative flex flex-col items-center bg-white/70 dark:bg-black/50 backdrop-blur-md border-2 border-black/10 dark:border-gray-700 rounded-2xl p-14 w-full max-w-3xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] z-10">
        {/* Vertical BATCH #21 */}
        <span className="absolute left-[-12rem] top-[52%] -translate-y-1/2 text-6xl font-extrabold tracking-[0.35em] rotate-90 text-gray-600/20 dark:text-gray-300/20 select-none pointer-events-none">
          BATCH #21
        </span>

        {/* Avatar */}
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-transparent pointer-events-none" />
          <Image
            src="https://avatars.githubusercontent.com/u/118007171?s=400&u=15a40e40c83b641d24da7feb7d7c64d656b591c8&v=4"
            alt="Nidhi's profile avatar"
            className="w-40 h-40 rounded-full border-2 border-gray-400 dark:border-gray-700 shadow-lg object-cover"
            width={500}
            height={500}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold font-mono mb-3 tracking-tight text-gray-700 dark:text-gray-200">Nidhi</h1>

        {/* ETH Address */}
        <div className="mb-3 text-gray-600 dark:text-gray-300">
          <Address address={ADDRESS} />
        </div>

        {/* Speed Run Eth Profile */}
        <div className="mb-3 text-gray-500 dark:text-gray-500">
          My{" "}
          <a
            href="https://speedrunethereum.com/builders/0x2Ef6340900ADbeaECC065777bdd193feF0e5D2E7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 dark:text-gray-400 hover:text-pink-500 whitespace-nowrap transition-colors"
          >
            SpeedRun Ethereum
          </a>{" "}
          profile
        </div>

        {/* Bio */}
        <p className="text-base text-center text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl">
          It all started with <span className="font-semibold">SheFi</span> and exploring{" "}
          <span className="font-semibold">Cryptozombies</span> and <span className="font-semibold">Ethernaut</span> for
          solidity contracts. Now diving into this decentralized world with{" "}
          <span className="font-semibold">BuildGuild</span>! Happy to join{" "}
          <span className="font-semibold">Batch #21</span>.
        </p>

        {/* Social Links */}
        <div className="flex gap-8 text-base mb-5">
          {socials.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition flex items-center gap-2"
              aria-label={name}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute w-[40rem] h-[40rem] bg-pink-200 dark:bg-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
    </main>
  );
};

export default NidhiBuilderPage;
