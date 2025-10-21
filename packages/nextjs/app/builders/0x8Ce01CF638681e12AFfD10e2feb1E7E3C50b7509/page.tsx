import Image from "next/image";
import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "checkra1n's Profile — Batch #21",
  description: "Web3 & DeFi Expert building with BuidlGuidl Batch #21",
};

const ADDRESS = "0x8Ce01CF638681e12AFfD10e2feb1E7E3C50b7509";

const SOCIAL_LINKS = [
  { href: "https://x.com/checkra1neth", label: "X (Twitter)", icon: "𝕏" },
  { href: "https://github.com/checkra1neth", label: "GitHub", icon: "⚡" },
  { href: "https://farcaster.xyz/checkra1n.eth", label: "Farcaster", icon: "🎯" },
  { href: "https://zora.co/@checkra1n", label: "Zora", icon: "🎨" },
];

const Checkra1nPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body p-8 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Avatar */}
                <div className="avatar">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      src="/builders/checkra1n-avatar.jpeg"
                      alt="checkra1n avatar"
                      width={160}
                      height={160}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    checkra1n
                  </h1>

                  <div className="mb-4">
                    <Address address={ADDRESS} />
                  </div>

                  <div className="badge badge-primary badge-lg mb-4">Batch #21 Builder</div>

                  {/* Bio */}
                  <p className="text-lg leading-relaxed text-base-content/80 max-w-2xl">
                    Web3 & DeFi Expert. Deep understanding of Crypto, NFTs, & Blockchain. I deliver actionable insights
                    & market edge to navigate the digital economy.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Social Links */}
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Connect</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {SOCIAL_LINKS.map(({ href, label, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary hover:scale-105 transition-transform"
                    >
                      <span className="text-xl mr-2">{icon}</span>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* SpeedRun Ethereum Link */}
              <div className="mt-8 text-center">
                <Link
                  href={`https://speedrunethereum.com/builders/${ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-secondary text-lg"
                >
                  View my SpeedRun Ethereum profile →
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="mt-8 card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">About My Journey</h2>
              <div className="space-y-4 text-base-content/80">
                <p>🚀 Building in Web3 with a focus on DeFi protocols and NFT ecosystems</p>
                <p>💡 Passionate about delivering actionable insights to help navigate the evolving digital economy</p>
                <p>🎯 Active contributor in the BuidlGuidl community, learning and building with Batch #21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkra1nPage;
