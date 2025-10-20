"use client";

import { ErrorBoundary } from "./ErrorBoundary";
import { ProfileAvatar } from "./ProfileAvatar";
import { socialLinks } from "./SocialIcons";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

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
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-primary hover:btn-secondary"
                    title={social.title}
                  >
                    <IconComponent />
                  </a>
                );
              })}
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
