const skillsArray = ["Solidity", "Rust", "TypeScript", "Python"];

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
