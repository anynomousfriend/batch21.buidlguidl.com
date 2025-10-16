import Link from "next/link";
import AsciiWave from "./AsciiWave";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const SOCIAL_LINKS = [
  { href: "https://x.com/ethra_here", label: "X" },
  { href: "https://github.com/ethrahere", label: "GitHub" },
  { href: "https://ethra.art", label: "Website" },
  { href: "https://farcaster.xyz/ethra", label: "Farcaster" },
];

const EthraPage: NextPage = () => {
  return (
    <div className="mt-4 p-8">
      <div className="flex flex-col md:flex-row h-full items-center justify-center p-8 gap-12 bg-base-100 shadow-xl text-base-content">
        {/* Info Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 max-w-md">
          <h1 className="text-2xl font-bold mb-3 text-base-content/100">Hey, I&apos;m Ethra 👋</h1>
          <Address address={"0xCc016E91e18bA3363aFA443CE0aa492379ea53B2"} size="xs" />
          <p className="text-sm md:text-base text-base-content/80 leading-relaxed mb-6">
            Making mini-apps for creatives and building with <span className="text-base-content/60">BuidlGuidl</span>{" "}
            Batch 21 — exploring creative ways to merge art and tech.
          </p>

          <div className="mb-6 w-full">
            <p className="text-sm text-base-content/70 mt-2">
              Try my Farcaster Mini-App if you are a music head. <br></br>
              Get rewarded for your taste.
            </p>
            <Link
              href="https://farcaster.xyz/miniapps/Pg9K0iSfnzFv/curio" // replace this
              target="_blank"
              className="btn btn-primary rounded-2xl px-6 py-3 text-sm md:text-base font-semibold hover:scale-105 transition-transform"
              aria-label="Launch Curio Mini-App"
            >
              Launch Curio
            </Link>
          </div>

          <div className="flex gap-4 mb-6 flex-wrap">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} target="_blank" className="btn btn-secondary btn-sm">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ASCII Wave Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <AsciiWave />
        </div>
      </div>
    </div>
  );
};

export default EthraPage;
