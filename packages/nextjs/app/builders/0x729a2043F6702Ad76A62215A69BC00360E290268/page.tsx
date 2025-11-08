import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x729a2043F6702Ad76A62215A69BC00360E290268";

const SOCIAL_LINKS = [
  { href: "https://github.com/anynomousfriend", label: "GitHub", icon: "💻" },
  { href: "https://x.com/SsubhankarX", label: "X", icon: "🐦" },
  { href: "https://www.linkedin.com/in/subh-choudhury/", label: "LinkedIn", icon: "💼" },
  { href: "https://t.me/Sshubhankar", label: "Telegram", icon: "✈️" },
  { href: "https://subhankar-s-portfolio.vercel.app/", label: "Portfolio", icon: "🌐" },
] as const;

const SKILLS = [
  "Solidity",
  "TypeScript",
  "Hardhat",
  "Next.js",
  "Figma",
  "UI Design",
  "Python",
  "JavaScript",
  "Linux",
] as const;

const GLASS_CARD =
  "bg-white/20 dark:bg-white/10 shadow-xl border border-black/10 dark:border-white/20 backdrop-blur-lg";
const GLASS_BADGE =
  "bg-black/5 dark:bg-white/20 border border-black/15 dark:border-white/30 text-base-content backdrop-blur-md";
const SOCIAL_BTN =
  "btn btn-outline btn-sm gap-2 bg-black/5 dark:bg-white/5 border-black/20 dark:border-white/30 hover:bg-black/10 dark:hover:bg-white/20 hover:border-black/30 dark:hover:border-white/50 transition-all";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`card ${GLASS_CARD} ${className}`}>
    <div className="card-body">{children}</div>
  </div>
);

const FOCUS_ITEMS = [
  "Leveraging UI/UX expertise combined with development to create intuitive and user-centric digital experiences",
  "Exploring emerging technologies including AI, cryptography, and Web3 ecosystems",
  "Designing scalable blockchain solutions and decentralized applications with exceptional UX",
  "Building innovative products at the intersection of design excellence and technical implementation",
] as const;

const SubhankarPage: NextPage = () => (
  <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 bg-transparent">
    <div className="relative z-10 max-w-5xl w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Profile Card */}
          {/* Profile Card */}
          <Card className="flex flex-col items-center text-center w-fit mx-auto">
            <div className="flex justify-center mb-4 relative">
              <div className="avatar relative">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 flex items-center justify-center">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1878746453612564480/UAH-vJsa_x96.jpg"
                    alt="Subhankar Choudhury"
                    width={128}
                    height={128}
                    className="rounded-full"
                    priority
                  />
                </div>
                {/* Twitter Badge - Positioned at border bottom-right */}
                <Link
                  href="https://x.com/SsubhankarX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg hover:scale-110 transition-transform border-2 border-base-100 dark:border-base-300"
                >
                  <span className="text-lg">𝕏</span>
                </Link>
              </div>
            </div>
            <h1 className="card-title text-2xl font-bold text-base-content">Subhankar Choudhury</h1>
            <div className="flex flex-wrap gap-2 justify-center text-xs mt-3">
              <span className="badge bg-black/5 dark:bg-white/20 border border-black/15 dark:border-white/30 text-base-content backdrop-blur-md">
                Product Designer
              </span>
              <span className="badge bg-black/5 dark:bg-white/20 border border-black/15 dark:border-white/30 text-base-content backdrop-blur-md">
                Blockchain Dev
              </span>
              <span className="badge bg-black/5 dark:bg-white/20 border border-black/15 dark:border-white/30 text-base-content backdrop-blur-md">
                AI
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <Address address={BUILDER_ADDRESS} />
            </div>
          </Card>

          {/* Tech Stack Card */}
          <Card>
            <h2 className="card-title text-lg text-base-content mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span key={skill} className={`badge ${GLASS_BADGE}`}>
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Card */}
          <Card>
            <h2 className="card-title text-xl mb-3 text-base-content">About Me</h2>
            <p className="text-base-content/80 leading-relaxed">
              Finance graduate with 3 years of design experience in SaaS and healthcare industries. Now bridging design
              and development to build complete products. Passionate about Web3 and exploring how to merge decentralized
              technology with traditional sectors to create innovative, user-centric solutions.
            </p>
            <p className="text-sm text-base-content/60 mt-2">🐧 Linux enthusiast | 🏗️ BuidlGuidl Batch 21</p>
          </Card>

          {/* Current Focus Card */}
          <Card>
            <h2 className="card-title text-xl mb-3 text-base-content">Current Focus</h2>
            <ul className="space-y-2 text-base-content/80">
              {FOCUS_ITEMS.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary text-lg flex-shrink-0">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Social Links Card */}
          <Card>
            <h2 className="card-title text-xl mb-3 text-base-content">Connect</h2>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className={SOCIAL_BTN}>
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default SubhankarPage;
