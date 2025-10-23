const skillsArray = ["Solidity", "Rust", "TypeScript", "Python"];
export const externalLinks = {
  github: "https://github.com/Parizval",
  twitter: "https://x.com/Parizval_Wizard",
  ethglboal: "https://ethglobal.com/showcase/stylish-lending-hook-t1c3u",
  shadowProtector: "https://github.com/shadow-protector/",
  ctfProfile: "https://ctf.buidlguidl.com/profile/0x7487F73c7D146c26a89415568D9f34D622780e1C",
  polkadotDegree: "https://kodadot.xyz/ahp/gallery/171-27",
};

export function SkillsComponent() {
  return (
    <div className="mt-2 flex flex-wrap gap-2 justify-center">
      {skillsArray.map((item, index) => (
        <span
          key={index}
          className="text-xs px-2 py-1 rounded-full border border-green-500/50 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
