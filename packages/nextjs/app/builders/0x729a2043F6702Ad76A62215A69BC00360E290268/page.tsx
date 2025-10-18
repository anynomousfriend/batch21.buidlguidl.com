"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";

const BUILDER_ADDRESS = "0x729a2043F6702Ad76A62215A69BC00360E290268";

const SOCIAL_LINKS = [
  { href: "https://github.com/anynomousfriend", label: "GitHub", icon: "💻" },
  { href: "https://x.com/SsubhankarX", label: "X", icon: "🐦" },
  { href: "https://www.linkedin.com/in/subh-choudhury/", label: "LinkedIn", icon: "💼" },
  { href: "https://t.me/Sshubhankar", label: "Telegram", icon: "✈️" },
  { href: "https://subhankar-s-portfolio.vercel.app/", label: "Portfolio", icon: "🌐" },
];

const SKILLS = ["Solidity", "TypeScript", "Hardhat", "Next.js", "Figma", "UI Design", "Python", "JavaScript", "Linux"];

// Custom Address Display Component (no network calls)
const AddressDisplay = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="flex items-center gap-2 justify-center">
      <button
        onClick={handleCopy}
        className="font-mono text-xs bg-base-200 px-3 py-2 rounded-lg hover:bg-base-300 transition-colors border border-base-300 flex items-center gap-2"
        title={address}
      >
        <span className="text-primary">●</span>
        <span>{shortAddress}</span>
        <span className="text-base-content/50">{copied ? "✓" : "📋"}</span>
      </button>
    </div>
  );
};

// Enhanced Matrix-style floating particles
const MatrixParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${(i * 2) % 100}%`,
    delay: `${(i * 0.3) % 5}s`,
    duration: `${6 + (i % 3)}s`,
    char: ["0", "1", "{", "}", "[", "]", "→", "λ", "Ξ"][i % 9],
    size: i % 3 === 0 ? "text-sm" : i % 2 === 0 ? "text-base" : "text-xs",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} font-mono text-primary animate-matrix-fall`}
          style={
            {
              left: particle.left,
              top: "-20px",
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              "--matrix-distance": "110vh",
              opacity: 0.7,
            } as React.CSSProperties
          }
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};

const SubhankarPage: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          95% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(var(--matrix-distance)) rotate(180deg);
            opacity: 0;
          }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-base-100 via-base-200 to-base-100">
        <MatrixParticles />

        <div
          className={`relative z-10 max-w-5xl w-full transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow fade-in-up backdrop-blur-sm bg-base-100/95">
                <div className="card-body items-center text-center">
                  <div className="avatar mb-4">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:ring-offset-4 transition-all">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://pbs.twimg.com/profile_images/1878746453612564480/UAH-vJsa_x96.jpg"
                        alt="Subhankar Choudhury"
                        className="w-32 h-32 rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="card-title text-2xl font-bold text-base-content">Subhankar Choudhury</h1>
                  <div className="flex flex-wrap gap-1 justify-center text-xs">
                    <span className="badge badge-primary badge-sm">Product Designer</span>
                    <span className="badge badge-secondary badge-sm">Blockchain Dev</span>
                    <span className="badge badge-accent badge-sm">Web3 Builder</span>
                  </div>
                  <div className="mt-3 w-full">
                    <AddressDisplay address={BUILDER_ADDRESS} />
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow fade-in-up backdrop-blur-sm bg-base-100/95"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="card-body">
                  <h2 className="card-title text-lg text-base-content">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map(skill => (
                      <span key={skill} className="badge badge-outline badge-sm hover:badge-primary transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow fade-in-up backdrop-blur-sm bg-base-100/95"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="card-body">
                  <h2 className="card-title text-xl mb-3 text-base-content">About Me</h2>
                  <p className="text-base-content/80 leading-relaxed">
                    Finance graduate with 3 years of design experience in SaaS and healthcare industries. Now bridging
                    design and development to build complete products. Passionate about Web3 and exploring how to merge
                    decentralized technology with traditional sectors to create innovative, user-centric solutions.
                  </p>
                  <p className="text-sm text-base-content/60 mt-2">🐧 Fedora enthusiast | 🏗️ BuidlGuidl Batch 21</p>
                </div>
              </div>

              {/* Current Focus Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow fade-in-up backdrop-blur-sm bg-base-100/95"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="card-body">
                  <h2 className="card-title text-xl mb-3 text-base-content">Current Focus</h2>
                  <ul className="space-y-2 text-base-content/80">
                    <li className="flex items-start gap-2 hover:text-base-content transition-colors">
                      <span className="text-primary mt-1">▹</span>
                      <span>Building and designing decentralized applications for SaaS and healthcare</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-base-content transition-colors">
                      <span className="text-primary mt-1">▹</span>
                      <span>Bridging Web3 with traditional industries through innovative product solutions</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-base-content transition-colors">
                      <span className="text-primary mt-1">▹</span>
                      <span>Mastering smart contract development and DeFi protocols</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-base-content transition-colors">
                      <span className="text-primary mt-1">▹</span>
                      <span>Contributing to BuidlGuidl Batch 21 and learning Web3 development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Links Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow fade-in-up backdrop-blur-sm bg-base-100/95"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="card-body">
                  <h2 className="card-title text-xl mb-3 text-base-content">Connect</h2>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map(({ href, label, icon }) => (
                      <Link
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm gap-2 hover:btn-primary transition-all"
                      >
                        <span>{icon}</span>
                        <span>{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubhankarPage;
