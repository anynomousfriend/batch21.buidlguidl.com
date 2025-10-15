import Image from "next/image";

// Reusable SVG Icon Component
const Icon = ({ path, stroke = false }: { path: string; stroke?: boolean }) => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    {...(stroke
      ? { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }
      : { fill: "currentColor" })}
  >
    <path d={path} />
  </svg>
);

// Icon path definitions
const icons = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  globe:
    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
};

export default function BuilderProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-100">
      <div className="max-w-2xl w-full">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body items-center text-center">
            {/* Profile Picture */}
            <div className="avatar mb-6">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src="https://euc.li/diegodev.eth"
                  alt="Diego - Builder Profile"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Name & Address */}
            <h1 className="card-title text-3xl mb-2">Diego Bianqui</h1>
            <div className="badge badge-primary badge-lg mb-6 font-mono text-xs">diegodev.eth</div>

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
              {[
                { href: "https://x.com/diegobianqui", icon: "x", title: "X (Twitter)" },
                { href: "https://www.linkedin.com/in/diegobianqui/", icon: "linkedin", title: "LinkedIn" },
                { href: "https://github.com/diegobianqui", icon: "github", title: "GitHub" },
                {
                  href: "https://speedrunethereum.com/builders/diegodev.eth",
                  icon: "globe",
                  title: "Speed Run Ethereum",
                },
                { href: "https://profiles.cyfrin.io/u/diegobianqui", icon: "globe", title: "Cyfrin Profile" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-primary hover:btn-secondary"
                  title={social.title}
                >
                  <Icon path={icons[social.icon as keyof typeof icons]} stroke={social.icon === "globe"} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
