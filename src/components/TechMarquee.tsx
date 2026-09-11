import { techStack } from "@/data/portfolio";

export default function TechMarquee() {
  const loop = [...techStack, ...techStack];

  return (
    <div className="relative py-8 overflow-hidden mask-fade-x border-y border-ink-800/60 bg-ink-900/30">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2.5 px-6 text-ink-400"
          >
            <tech.icon className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium whitespace-nowrap">
              {tech.name}
            </span>
            <span className="text-ink-700 ml-6">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
