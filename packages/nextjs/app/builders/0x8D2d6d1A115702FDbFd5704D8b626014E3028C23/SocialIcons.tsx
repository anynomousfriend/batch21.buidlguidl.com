// Social Icon Components
export const XIcon = () => <span className="text-lg font-bold">𝕏</span>;

export const LinkedInIcon = () => <span className="text-lg font-bold">in</span>;

export const GitHubIcon = () => <span className="text-lg">⚡</span>;

export const GlobeIcon = () => <span className="text-lg">🌐</span>;

// Social link types
export type SocialLink = {
  href: string;
  icon: () => React.JSX.Element;
  title: string;
};

export const socialLinks: SocialLink[] = [
  { href: "https://x.com/diegobianqui", icon: XIcon, title: "X (Twitter)" },
  { href: "https://www.linkedin.com/in/diegobianqui/", icon: LinkedInIcon, title: "LinkedIn" },
  { href: "https://github.com/diegobianqui", icon: GitHubIcon, title: "GitHub" },
  {
    href: "https://speedrunethereum.com/builders/diegodev.eth",
    icon: GlobeIcon,
    title: "Speed Run Ethereum",
  },
  { href: "https://profiles.cyfrin.io/u/diegobianqui", icon: GlobeIcon, title: "Cyfrin Profile" },
];
