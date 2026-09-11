import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Building2,
  MapPin,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { experience } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

export default function Experience() {
  const { t } = useLang();
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 section-padding overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-400 font-mono text-sm font-medium tracking-wider uppercase">
              {t.experience.label}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-16 text-balance">
            {t.experience.headingPre}{" "}
            <span className="gradient-text">
              {t.experience.headingHighlight}
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-ink-800 to-transparent" />

            <div className="space-y-8">
              {t.experience.items.map((job, i) => {
                const data = experience[i];
                if (!data) return null;
                return (
                  <div
                    key={i}
                    className={`relative pl-16 transition-all duration-500 ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
                  >
                    <div className="absolute left-0 top-1 w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-brand-500/20 border border-accent-500/30 flex items-center justify-center z-10">
                      <Briefcase className="w-5 h-5 text-accent-400" />
                    </div>

                    <div className="glass-card p-6 lg:p-7 hover:bg-ink-800/40 transition-colors duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="font-display font-bold text-xl text-white">
                          {job.role}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-accent-400 font-medium">
                          <Building2 className="w-4 h-4" />
                          {data.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-ink-500 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {data.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-ink-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>

                      <p className="text-sm text-ink-400 leading-relaxed mb-5">
                        {job.description}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {job.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2.5 text-sm text-ink-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-ink-800/60 border border-ink-700/60 text-xs font-mono text-ink-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
