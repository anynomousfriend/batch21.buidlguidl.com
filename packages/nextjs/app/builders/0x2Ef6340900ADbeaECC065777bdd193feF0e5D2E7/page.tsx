import Image from "next/image";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "My Profile — Batch #21",
  description: "Builder page for Batch #21",
};

const ADDRESS = "0x2Ef6340900ADbeaECC065777bdd193feF0e5D2E7";

const MyPage: NextPage = () => {
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
          <a
            href="http://discord.com/users/1065312151557914704"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition flex items-center gap-2"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-gray-800 dark:fill-gray-200 group-hover:fill-pink-500 transition-colors"
            >
              <title>Discord</title>
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>

          <a
            href="https://github.com/nidhi2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition flex items-center gap-2"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-gray-800 dark:fill-gray-200 group-hover:fill-pink-500 transition-colors"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="https://x.com/nidhi_youmi"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition flex items-center gap-2"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-gray-800 dark:fill-gray-200 group-hover:fill-pink-500 transition-colors"
            >
              <title>X</title>
              <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute w-[40rem] h-[40rem] bg-pink-200 dark:bg-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
    </main>
  );
};

export default MyPage;
