"use client";

import Image from "next/image";
import Link from "next/link";
import MatrixParticles from "./MatrixParticles";
import type { Address as ViemAddress } from "viem";
import { Address as AddressComponent } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS: ViemAddress = "0x729a2043F6702Ad76A62215A69BC00360E290268";

const SOCIAL_LINKS = [
  { href: "https://github.com/anynomousfriend", label: "GitHub", icon: "💻" },
  { href: "https://x.com/SsubhankarX", label: "X", icon: "🐦" },
  { href: "https://www.linkedin.com/in/subh-choudhury/", label: "LinkedIn", icon: "💼" },
  { href: "https://t.me/Sshubhankar", label: "Telegram", icon: "✈️" },
  { href: "https://subhankar-s-portfolio.vercel.app/", label: "Portfolio", icon: "🌐" },
];

const SKILLS = ["Solidity", "TypeScript", "Hardhat", "Next.js", "Figma", "UI Design", "Python", "JavaScript", "Linux"];

const SubhankarPage = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-base-100 via-base-200 to-base-100">
        <MatrixParticles />

        <div className="relative z-10 max-w-5xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur-sm bg-base-100/95">
                <div className="card-body items-center text-center">
                  <div className="avatar mb-4">
                    <div className="w-32 h-32 relative rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden transition-transform duration-200 hover:scale-[1.03]">
                      <Link
                        href="https://x.com/SsubhankarX"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Subhankar's X (Twitter) profile"
                        className="block w-full h-full rounded-full"
                      >
                        <Image
                          src="https://pbs.twimg.com/profile_images/1878746453612564480/UAH-vJsa_x96.jpg"
                          alt="Subhankar Choudhury"
                          fill
                          sizes="128px"
                          className="rounded-full object-cover"
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                  <h1 className="card-title text-2xl font-bold text-base-content">Subhankar Choudhury</h1>
                  <div className="flex flex-wrap gap-1 justify-center text-xs">
                    <span className="badge badge-primary badge-sm">Product Designer</span>
                    <span className="badge badge-secondary badge-sm">Blockchain Dev</span>
                    <span className="badge badge-accent badge-sm">Web3 Builder</span>
                  </div>
                  <div className="mt-3 w-full flex justify-center">
                    <AddressComponent address={BUILDER_ADDRESS} size="sm" />
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur-sm bg-base-100/95"
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
                className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur-sm bg-base-100/95"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="card-body">
                  <h2 className="card-title text-xl mb-3 text-base-content">About Me</h2>
                  <p className="text-base-content/80 leading-relaxed">
                    Finance graduate with 3 years of design experience in SaaS and healthcare industries. Now bridging
                    design and development to build complete products. Passionate about Web3 and exploring how to merge
                    decentralized technology with traditional sectors to create innovative, user-centric solutions.
                  </p>
                  <p className="text-sm text-base-content/60 mt-2">🐧 Linux enthusiast | 🏗️ BuidlGuidl Batch 21</p>
                </div>
              </div>

              {/* Current Focus Card */}
              <div
                className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur-sm bg-base-100/95"
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
                className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur-sm bg-base-100/95"
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
