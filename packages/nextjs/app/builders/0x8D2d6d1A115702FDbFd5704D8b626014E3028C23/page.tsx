"use client";

import React from "react";
import type { NextPage } from "next";
// Import Scaffold-ETH components
import { Address, BlockieAvatar } from "~~/components/scaffold-eth";

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error("ErrorBoundary caught an error:", error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-base-100">
          <div className="card bg-error text-error-content">
            <div className="card-body">
              <h2 className="card-title">Something went wrong!</h2>
              <p>Error: {this.state.error?.message}</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => this.setState({ hasError: false, error: undefined })}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add error logging with better error details
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", event => {
    console.error("Unhandled promise rejection details:", {
      reason: event.reason,
      promise: event.promise,
      stack: event.reason?.stack,
      stringified: JSON.stringify(event.reason, null, 2),
    });

    // Prevent the default behavior of logging "[object Object]"
    event.preventDefault();
  });

  window.addEventListener("error", event => {
    console.error("Global error:", {
      message: event.message,
      filename: event.filename,
      line: event.lineno,
      error: event.error,
      stack: event.error?.stack,
    });
  });
}
// Icon Components - using simple text/emoji approach (no SVG paths!)
const XIcon = () => <span className="text-lg font-bold">𝕏</span>;

const LinkedInIcon = () => <span className="text-lg font-bold">in</span>;

const GitHubIcon = () => <span className="text-lg">⚡</span>;

const GlobeIcon = () => <span className="text-lg">🌐</span>;

// Social link types
type IconKey = "x" | "linkedin" | "github" | "globe";

type SocialLink = {
  href: string;
  icon: IconKey;
  title: string;
};

const socialLinks: SocialLink[] = [
  { href: "https://x.com/diegobianqui", icon: "x", title: "X (Twitter)" },
  { href: "https://www.linkedin.com/in/diegobianqui/", icon: "linkedin", title: "LinkedIn" },
  { href: "https://github.com/diegobianqui", icon: "github", title: "GitHub" },
  {
    href: "https://speedrunethereum.com/builders/diegodev.eth",
    icon: "globe",
    title: "Speed Run Ethereum",
  },
  { href: "https://profiles.cyfrin.io/u/diegobianqui", icon: "globe", title: "Cyfrin Profile" },
];

// Profile Avatar Component - simplified to pass linting
const ProfileAvatar = ({ address, size }: { address: string; size: number }) => {
  // Use basic BlockieAvatar with explicit ensImage prop set to undefined
  // This ensures the blockie fallback works properly
  return <BlockieAvatar address={address as `0x${string}`} ensImage={undefined} size={size} />;
};

const DiegoBianquiPageContent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-100">
      <div className="max-w-2xl w-full">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body items-center text-center">
            {/* Profile */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <ProfileAvatar address="0x8D2d6d1A115702FDbFd5704D8b626014E3028C23" size={128} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="card-title text-3xl">Diego</h1>
                <div className="badge badge-primary badge-lg font-mono text-xs">
                  <Address
                    address="0x8D2d6d1A115702FDbFd5704D8b626014E3028C23"
                    format="short"
                    size="xs"
                    onlyEnsOrAddress
                  />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="text-left w-full mb-6">
              <h2 className="text-xl font-bold mb-3">About</h2>
              <p className="text-base-content/80 leading-relaxed">
                Former Software Engineering Manager at Accenture, now specializing in Web3/blockchain software
                development. With over a decade of experience delivering IT consulting services across diverse
                industries, I have led teams in web development, cloud architecture, and Python solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="divider">Connect</div>
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-primary hover:btn-secondary"
                  title={social.title}
                >
                  {social.icon === "x" && <XIcon />}
                  {social.icon === "linkedin" && <LinkedInIcon />}
                  {social.icon === "github" && <GitHubIcon />}
                  {social.icon === "globe" && <GlobeIcon />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiegoBianquiPage: NextPage = () => {
  return (
    <ErrorBoundary>
      <DiegoBianquiPageContent />
    </ErrorBoundary>
  );
};

export default DiegoBianquiPage;
